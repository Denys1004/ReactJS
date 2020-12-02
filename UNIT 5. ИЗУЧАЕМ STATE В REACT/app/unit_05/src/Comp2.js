    import React from 'react';
    import { useState } from 'react';

    function Comp2() {
        const [count, setCount] = useState(0);

        const handler = () => {
            let currentCount = count;
            currentCount++;
            setCount(currentCount);
        }
        return (
            <>
                <div><button onClick={handler}>This button change state</button></div>
                <div>{count % 2 === 0 ? 'even' : 'odd'}</div>
                <div>{count}</div>
            </>
        );
    }

    export default Comp2;