var initialState = 0;



function counter(state=initialState , action) {
    if (action.type == "INCREMENT") {
        return state + 1

    }
    return state;
}

export default counter;