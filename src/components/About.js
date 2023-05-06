import { useState } from "react";
import { useNavigate } from "react-router-dom";

function About(){
    const [data,setData]=useState({name:'',palce:'', number:null, email:''})
    const navigate=useNavigate()
    const handledata =(e)=>{
                setData({...data, [e.target.name]:e.target.value})
    }
    const submit=(e)=>{
        e.preventDefault()
        navigate(`/contactus/${JSON.stringify(data)}`)
    }
    return(
        <div>
            <form>
                <input type='text' name='name' value={data.name} onChange={(e)=>handledata(e)} />
                <submit onClick={(e)=>submit(e)}>submit</submit>
            </form>
        </div>
    )
}
export default About;
