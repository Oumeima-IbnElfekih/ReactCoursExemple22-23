import { useParams } from "react-router-dom"

export default function Home() {
    const params =useParams()
    console.log(params);
    return (<><h1>welcome to home page {params.username}</h1></>)
}