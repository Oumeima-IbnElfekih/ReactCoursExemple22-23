import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';

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
      </Route>
      <Route path='*' element={<NotFound />}/>
   </Routes>
   </Suspense>
   </>
  );
}

export default App;
