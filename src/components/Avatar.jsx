import React, { useEffect, useState } from "react";

export default function Avatar() {

    const [name, setName] = useState("amran");
    const [image, setImage] = useState("");    //avatarLink

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetch(`https://robohash.org/${name}`, {signal})
        .then((response) => setImage(response.url));

        return () => {
            console.log('clean');
            controller.abort();
        }
    }, [name]);

    return (
        <div className="avatar">
            <label htmlFor="image"> Enter the name </label>
            <input
                id="image"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} />

                <img src={image} alt="img"/>
        </div>
    );
    }
