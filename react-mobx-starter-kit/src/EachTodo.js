import { observer } from "mobx-react";
import { observable, action } from "mobx";


class EachTodo{
    @observable inputText="";
    @observable completed=false;

    constructor(text,id){
        this.inputText=text;
        this.id=id;
    }

    @action completeTodo=()=>{
        this.completed=!this.completed;
    }

    @action updateTodo=(text)=>{
        this.inputText=text;
    }
}

export default EachTodo