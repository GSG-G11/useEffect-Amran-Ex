import { useEffect, useState } from "react"

const IncrementCount  = () =>{
    const [count, setCount] = useState(0);

    const incrementCount = () =>{
        setCount((prev)=> prev + 1)
    }
    useEffect(()=>{
        document.addEventListener('mousedown', incrementCount)
        return ()=> document.removeEventListener('mousedown', incrementCount)
    })



    return (
        <>
        <h1>{count}</h1>
        </>
    )
}
export default IncrementCount