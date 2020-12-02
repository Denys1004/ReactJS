import React from 'react';

class Component1 extends React.Component {
    constructor(){
        super();
        this.state = {
            allComments: [] // 1. Это будет массив коментариев
        }
        this.myRef = React.createRef(); // 3. в конструкторе обьявляем ref
    }

    addComment = () => {
        let comment = this.myRef.current.value; // 4. получаем значение из textarea
        let comments = this.state.allComments; // 5. здесь мы должны получить все комментарии из state в какуюто переменную
        comments.push(comment)// 6. теперь надо запушить новый комментарий в comments
        this.setState({allComments: comments})// 7. теперь надо перезаписать state
        this.myRef.current.value = '';// 8. очищаем textarea
    }

    render(){
        return(
            <>
                <textarea ref={this.myRef}></textarea>{/*  2. что бы получить значение из textarea используем ref */}
                <button onClick={this.addComment}>Add Comment</button>
                <div>
                    <ul>
                        {/*  9. выводим комментарии: */}
                        {this.state.allComments.map( (item, index) => <li key={index.toString()}>{item}</li>)}
                    </ul>
                </div>
            </>
        )
    }
}

export default Component1;