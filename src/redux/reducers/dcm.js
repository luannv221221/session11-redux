const initialCount = 0;

export const dcm = (state=initialCount,action)=>{
    switch (action.type) {
        case "update":
            return state + action.payload;
        default:
            return state;
    }
}