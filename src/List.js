import { Component } from "react";
import fruit from "./apples.png";

export class List extends Component{
    state = {
        userInput: "",
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e })
        console.log(e)
    }

    addItem(input){
        if (input === ""){
            alert("Please, put your item")
        }else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: " "})
    }
}
    crossedWord(event){
        const li = event.target;
        li.classList.toggle("crossed")
    }
    deleteItem(){
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }
    onFormSub(e) {
        e.preventDefault()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onFormSub}>
            <div className="container">
                <input placeholder="Put your product... " type="text"
                onChange={(e)=> {this.onChangeEvent(e.target.value)}}
                value={this.state.userInput}/>
            </div>
            <div className="addItem">
                <button className="btnOne" onClick={() => this.addItem(this.state.userInput)}>ADD</button>
            </div>
            <ul>
                {this.state.groceryList.map((item, index)=> (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={fruit} width="20px" alt="apple"/>
                        {item}</li>
                ))}
            </ul>
            <div className="deleteItem">
            <button className="btnTwo" onClick={() => this.deleteItem()}>DELETE</button>
            </div>
            </form>
            </div>
        )
    }
} 