import { useParams } from "react-router-dom";

function ContactUs(){
    const {data}=useParams()
    const val=JSON.parse(data)
    return(
        <div>
            {val.name}
        </div>
    )
}
export default ContactUs;