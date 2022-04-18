import React, { useEffect, useState } from 'react'

export default function UserProfile() {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(`https://jsonplaceholder.typicode.com/users`, {signal})
        .then(res => res.json())
        .then(res => setData(res))
        .catch((err) => console.log(err));

        return ()=> {
            console.log('clean');
            controller.abort();
        }
    }, [])

    const handleDelete = (id)=>{
        const result = data.filter((ele) =>{
            return (
                ele.id !== id
            )
        })
        setData(result)

        //other approach
        // setData((prev) => prev.filter((ele) => {
        //         return (
        //             ele.id !==id 
        //         );
        //          }));
    }

    const handleUpdate = (id)=>{
        const newName = prompt('Enter new name: ');
        if (newName.trim() === '') return

        setData((prev) => prev.map((ele) =>
            ele.id === id ? {...ele, name: newName} : ele))
        
    }


  return (  
    <div className='userProfile'>

        {data.map((ele) =>{
            return(
            <div key={ele.id} style= {{backgroundColor: '#eee'}} className = 'divContent'> 
            <h1> the name: {ele.name}</h1>
            <p>email: {ele.email}</p>
            <p> address of street: {ele.address.street}</p>
            <button onClick={() => handleDelete(ele.id)}>delete</button>
            <button onClick={() => handleUpdate(ele.id)}>edit</button>
            </div>
            
            )
        })}
    </div>
  )
}
