var initialState = [ 
    
        { id: 1, title: "Obst kaufen" },
        { id: 2, title: "Zur Bank gehen" },
        { id: 3, title: "Training" },
        { id: 4, title: "Programmieren" },
        { id: 5, title: "Whey protein kaufen" },
        { id: 6, title: "Wohnung sauber machen" }
    
];

export function todos(state=initialState, action){
    if(action.type==="ADD_TODO"){

        var newId = 0;

        state.forEach(function(element) {
            if(element.id>newId){
                newId = element.id;
            }
        });

        return [].concat(state, [{id:newId+1,title:action.title}] );
        
        
    }
    return state;
    
}

