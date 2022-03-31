import React, { useState, useEffect } from 'react';

const Contact = () => {

    const [age, setAge] = useState(1)
    const [name, setName] = useState('shoha')



    useEffect(()=>{
        console.log('i have mounted')}
        , [])


    return (
        <div>
            {console.log('i have rendered')}
            <h1>{name}</h1>
            <h1>{age}</h1>
            <button onClick={()=>setAge(age+1)}>+</button>
            <button onClick={()=>setName(name+'ha')}>+</button>
        </div>
    )
};
export default Contact;