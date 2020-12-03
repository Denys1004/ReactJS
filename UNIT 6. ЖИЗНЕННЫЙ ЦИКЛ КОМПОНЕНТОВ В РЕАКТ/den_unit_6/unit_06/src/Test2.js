import React, { useState, useEffect } from 'react';

function Test2(props) {
    console.log('set state');
    const [s1, setS1] = useState(props.arg);

    const buttonHandler = () => {
        console.log('handler');
        let val = s1;
        val++;
        setS1(val);
    }

    useEffect(() => {
        console.log('effect');
    });

    console.log('render 1');
    return (
        <>
            {console.log('render 2')}
            <div>
                <button onClick={buttonHandler}>Push</button>
            </div>
            <div>
                {s1}
            </div>
        </>
    )
}

export default Test2;