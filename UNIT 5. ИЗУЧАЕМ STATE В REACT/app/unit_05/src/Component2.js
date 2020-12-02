import React from 'react';
import {useState} from 'react'; // 1.

function Component2(){
    const [allComments, setAllComments] = useState([]);  // 2. обьявляем state, который будет массивом
    let myRef = React.createRef(); // 3. создаем реф

    let addComment = () => {
        let comment = myRef.current.value; // 5. получаем значение из textarea
        let comments = [...allComments, comment]; // 6. здесь мы должны получить все комментарии из state в какуюто переменную
        setAllComments(comments)// 7. теперь надо перезаписать state
        myRef.current.value = '';// 8. очищаем textarea
    }

    return(
        <>
            <textarea ref={myRef}></textarea> {/* 4. цепляем реф на елемент */}
            <button onClick={addComment}>Add Comment</button>
            <div>
                <ul>
                    {allComments.map( (item, index) => <li key={index.toString()}>{item}</li>)}
                </ul>
            </div>
        </>
    )
}

export default Component2;