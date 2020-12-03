import React from "react";

class Homework1 extends React.Component{
    constructor(props){ 
        console.log(props);
        super();
        this.state = {
            s1 : props.p1
        }
        this.s2 = 201;
    }

    buttonHandler = () => {
        let curState = this.state.s1;
        curState += 50;
        this.setState({ s1: curState});
        this.s2 += 50;
    }

    componentDidMount(){
        let curState = this.state.s1;
        curState += 5;
        this.setState({ s1: curState});
        this.s2 += 5;
    }

    render(){
        return(
            <>
                <div>{this.state.s1}</div>
                <div>{this.s2}</div>
                <button onClick={this.buttonHandler}>Push</button>
            </>
        )
    }
}

export default Homework1;