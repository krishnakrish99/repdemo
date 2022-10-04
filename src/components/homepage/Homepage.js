import "./Homepage.css"
import { useState } from "react";
import UseReducer from "../hooks/UseReducer";

function Homepage(){
    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }
    return(
        <div className="homep">
        <h2>This is Homepage</h2>
        <h2>Count: {count}</h2>
        <button onClick={()=>increment()}>Increment</button>
        <UseReducer></UseReducer>
        </div>
    );
}
export default Homepage;