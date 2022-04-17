import { useEffect, useState } from "react"

const Tomato = ()=>{
    const [dimen, setDimen] = useState({x: 0, y: 0});
    const [color, setColor] = useState({})

    const mousemove = (e)=> {
        if((dimen.x > window.innerWidth/2) ){
            setColor({style: 'tomato'});

        }else{

            setColor({style: 'blue'});
        }
        setDimen({ x: e.screenX, y: e.screenY });
    }


    useEffect(()=>{
        document.addEventListener('mousemove', mousemove)
        return ()=>{
            document.removeEventListener('mousemove', mousemove)
        }

    })

    return(
        <>
        <div style={{backgroundColor: color.style , height: '500px' , textAlign: "center"}}>
            <h1>Im now in X{dimen.x} and Y{dimen.y}</h1>
        </div>
        
        </>

    )
}
export default Tomato;