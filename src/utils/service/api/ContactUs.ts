import http from "../interceptor/axiosClient";
import { toast } from "react-hot-toast";
import { IContact } from './../../../types/IContact';

 export const ContactUs = async(value:IContact)=>{
    try {
        const result = await http.post('/contact-us',value)
        return result
    } catch (error) {
        toast.error(error.response.data.ErrorMessage[0])
    }
}



