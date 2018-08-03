/**  **/
import {todos} from "./todos";
import {addTodo} from "./todos";
import counter from "./counter";


import {combineReducers} from "redux";

const reduce = combineReducers({
    counter:counter,
    todos:todos
})


/* function reduce(state, action){
    if(state===undefined){
        return {
                counter: counter(undefined, action),
                todos: todos(undefined, action)
        }
    }else{
        
        return{
            counter: counter(state.counter, action),
            todos: todos(state.todos, action)
        }
    }

} */

export default reduce;