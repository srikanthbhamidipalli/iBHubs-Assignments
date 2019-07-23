import { observable, action, computed, get } from "mobx";
import EachTodo from './EachTodo'

class Todos{
    @observable todoList=[];
    @observable filterText="all";
    id=0;
    @action removeTodo=(id)=>{
        this.todoList=this.todoList.filter(todoItem => todoItem.id!=id)
    }

    @action addTodo=(todoText)=>{
        this.todoList.push(new EachTodo(todoText,this.id))
        this.id++;
    }

    @action clearAllCompletedTodos=()=>{
        this.todoList=this.todoList.filter(todoItem => !todoItem.completed)
    }

    @computed get filteredTodos(){
        if(this.filterText==="all")
            return this.todoList
        else if (this.filterText==="active"){
            return this.todoList.filter(todoItem => !todoItem.completed)
        }
        else
            return this.todoList.filter(todoItem => todoItem.completed)
    }

    @computed get isAnyOneCompleted(){
        if(this.todoList.filter(todoItem => todoItem.completed ).length>0)
            return true
        else
            return false
    }

    @computed get activeTodoCount(){
        return this.todoList.filter(todoItem => !todoItem.completed).length
    }
        
}

const todoStore=new Todos();

export default todoStore

