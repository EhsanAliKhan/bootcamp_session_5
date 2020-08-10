const numberReducer = (state, action)=>{
    switch( action.type){
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
    }
}

export default numberReducer;