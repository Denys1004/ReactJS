import React from "react";

class Test1Den extends React.Component{
    constructor(props){ // 2. принимаем props
        console.log(props); // 3. получаем обьект вида {arg: 77}
        super();
        this.state = {
            // s1 : props.arg1 // 4. можем props присвоить в state
            s1 : 0 
        }
    }

    buttonHandler = () => {
        let val = this.state.s1; 
        val++;
        this.setState({ s1 : val })
    }

    static getDerivedStateFromProps(props, state){
        return null; 
        // return ({ s1 : props.arg1});
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    render(){
        return(
            <>
                <button onClick={this.buttonHandler}>Push</button>
                <div>{this.state.s1}</div>
            </>
        )
    }
}

export default Test1Den;