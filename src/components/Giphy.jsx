import { useEffect, useState } from "react"

const Giphy = ()=>{
    const [gift, setGift] = useState([]);
    const [searchName, setSearchName] = useState('');

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchName}&api_key=9cmef6nuvX3dJSI7PLR2l6WtgvEWD5m2`,
         {signal})
        .then(data => data.json())
        .then(data => console.log(data))

        return () => {
            console.log('clean');
            controller.abort();
            
        }
    }, [searchName]);   
    

    return(
        <>
        <input type="text" value={searchName} onChange={(e)=> setSearchName(e.target.value)}/>
        </>
    )
}
export default Giphy
