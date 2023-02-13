import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './FC/FonctionalComponent';
import useWindowWidth from './Custom-hooks/useWindowWidth';
import useIsOnline from './Custom-hooks/useIsOnline';




function App() {
  const {width,height}= useWindowWidth() ;
  const online= useIsOnline()
  return (
    <>
    {width} {height}
    {online ? <p> true </p> : <p> false </p>}
    <FunctionalComponent />
   </>
  );
}

export default App;
