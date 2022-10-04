import { useReducer } from "react";

function UseReducer(){
    const reducer = (state, action) =>{
        switch(action.type){
            case "Increment":
                return {count : state.count+1}
            case "ToggleShowText":
                return {
                    count: state.count,
                    showText: !state.showText
                };
            case "decrement":
                return{count:state.count-1}
            default: return state;        
        }
    };
    const [state,dispatch] = useReducer(reducer,{count:0,showText:true})
    return(
        <div>
            <h1>Hello</h1>
            <h2>count: {state.count}</h2>
            <button onClick={()=>{dispatch({type:"Increment"})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"ToggleShowText"})}}>Text</button>
            <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
            {state.showText && <p>This is a text</p>}
        </div>
    );
}
export default UseReducer;