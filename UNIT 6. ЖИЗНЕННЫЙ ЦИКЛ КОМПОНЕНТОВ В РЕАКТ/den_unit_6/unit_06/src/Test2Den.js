import React, {useState, useEffect} from 'react';


function Test2Den(props) { // 1. getting props
    const[s1, setS1] = useState(props.arg1); // 2. setting props into state

    const buttonHandler = () => {
        let val = s1; 
        val++;
        setS1(val );
    }

    useEffect(()=>{
        console.log('effect');
    })
    
    return(
        <>
            <button onClick={buttonHandler}>Push</button>
            <div>{s1}</div>
        </>
    )
}

export default Test2Den;