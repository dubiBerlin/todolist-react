export function incrementCounter() {
    return { type: "INCREMENT" }
}


export function addTodo(title){
    console.log("action add todo "+title);
    return {
        type: "ADD_TODO",
        title: title
    }
}
