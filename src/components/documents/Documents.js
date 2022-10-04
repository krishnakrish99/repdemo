import { useEffect } from "react";
import axios from "axios";
function Documents(){
         useEffect(()=>{
         axios.get("http://localhost:9092/documents").then((Response)=>{
             console.log(Response.data)
        });
    })

    return(
        <h2>Upload Documents</h2>
    );
}
export default Documents;