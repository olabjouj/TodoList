import React, { Component } from 'react';


class TodoList extends Component {
    constructor(){
        super();
        this.state = {
            userInput : "",
            items:[]
        };
    }
    onChange(event){
        this.setState({
            userInput: event.target.value
        }, ()=> console.log(this.state.userInput));
    }
    addTodo(event){
        event.preventDefault();
        this.setState({
            userInput :'',
            items : [...this.state.items, this.state.userInput]
        });
    }
    deletTodo(event){
        event.preventDefault();
        const array= this.state.items;
        const index = array.indexOf(event.target.value);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }
    renderTodos( ){ 
        return this.state.items.map((item)=>{
            return(
                <div key={item}>
                    {item} | <button onClick={this.deletTodo.bind(this)}>X</button>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                <h1>Ma list Todo</h1>
                <form>
                    <input type="text" 
                            placeholder="Renseigner ton Item" 
                            value={this.state.userInput}
                            onChange={this.onChange.bind(this)}/>
                    <button onClick={this.addTodo.bind(this)}>Ajouter</button>
                    
                </form>
                <div>
                    {this.renderTodos()}
                </div>
            </div>

        );
    } 
}
export default TodoList;