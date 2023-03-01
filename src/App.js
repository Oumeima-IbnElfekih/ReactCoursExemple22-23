import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import Redux from './ExempleRedux/ReduxComponent';
import Counter from './ReduxToolKit/ReduxToolKitComponent';

const Home = React.lazy(()=> import('./Home')) ;
const FuncComponent = React.lazy(()=> import('./ClassComponent')) ;
const NotFound = React.lazy(()=> import('./NotFound')) ;

function App() {
  return (
    <>
    
   <Suspense fallback={<p>Chargement ...</p>}>
   <Link to="/application" replace={true}>Home</Link>
    <Link to="/application/classComponent" state={{name :"Test"}}>FuncComponent</Link>
    
    {/* <a href='/application/classComponent'>FuncComponent</a> */}
   <Routes>
     
      <Route path='/application'>
             <Route index element={<Home/>} />
             <Route path="classComponent" element={<FuncComponent/>} />
             <Route path="reduxComponent" element={<Redux/>} />
             <Route path="reduxtoolkitComponent" element={<Counter/>} />
      </Route>
      <Route path='*' element={<NotFound />}/>
   </Routes>
   </Suspense>
   </>
  );
}

export default App;
