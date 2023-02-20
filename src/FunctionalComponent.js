import { useLocation } from "react-router-dom"

export default function FunctionnalComponent() {

    const { state } = useLocation() ;
    return <h1>Hello FC
        {state.name}
    </h1>



}