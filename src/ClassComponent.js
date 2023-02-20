import React from 'react' 
import { useLocation, useSearchParams } from 'react-router-dom'



export default function FuncComponent (){
   const [searchParams,setSearchParams] = useSearchParams({name:""});
   console.log(searchParams)
   const { state } = useLocation() ;
   return <h1>Hello FC
       {state.name}
   </h1>

   // return <h1>hello from FC { searchParams.get('name')}</h1>
     
}