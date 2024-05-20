export const increaseCounter=(value)=>{
    console.log(value);
    return {
        type:"increase",
        payload: value
    }
}
export const decreaseCounter=(value)=>{
    return{
        type:"decrease",
        payload:value
    }
}