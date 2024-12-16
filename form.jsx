import React, { useState} from "react" ;
import axios from "axios";

export const FormData1 =()=>{
    const [file,setfile]=useState("")
    console.log(file)
    let handleform=async(e)=>{
        e.preventDefault();
        const formdata = new FormData();
        formdata.append('file',file)
        await axios.post('http://localhost:3000/api/create',{
        formdata},{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                })
        
    }
    return(
        <div>
            <h1>Form</h1>

            <form onSubmit={handleform}>
                <input type="file" name="file" onChange={(e)=>{setfile(e.target.files[0])}}/>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}