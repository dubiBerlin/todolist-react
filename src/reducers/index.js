/**  **/

var initialState = {
    counter:0,
    todos: [
        { id: 1, title: "Obst kaufen" },
        { id: 2, title: "Zur Bank gehen" },
        { id: 3, title: "Training" },
        { id: 4, title: "Programmieren" },
        { id: 5, title: "Whey protein kaufen" },
        { id: 6, title: "Wohnung sauber machen" }
    ]
};

function counter(state = initialState , action) {
    if (action.type == "INCREMENT") {
        return {
            counter: state.counter + 1,
            todos:state.todos
        }

    }
    return {
        counter: state.counter ,
        todos:state.todos
    }
}

export default counter;