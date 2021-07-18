const headerState = (state = false, action) =>{
    
    switch(action.type){
        case "HEADER_STATE":
            return action.detail;

        default:
            return state;
    }
}

export default headerState;