import React, {Component} from 'react'
import axios from 'axios'



import PageHeader from '../template/pageHeader'
import TodoForm from './tofoForm'
import TodoLista from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props);

        this.state = { description: ' ', list: [] }


        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }
    handleAdd(){
        const descripition = this.state.description
        axios.post(URL, {descripition})
        .then(resp => console.log('Funcionou'))
    }


    render(){
        return (
            <div>
                <PageHeader nome='Tarefas' small='Cadastro'/>
                <TodoForm description={this.state.description}
                handleChange={this.handleChange}
                handleAdd={this.handleAdd}/>
                <TodoLista />
            </div>
        )
    }
}