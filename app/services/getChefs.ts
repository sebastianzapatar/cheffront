import axios from 'axios';
import { Chef } from '../schemas/Chef';
const baseURL=process.env.NEXT_PUBLIC_API_URL;

export async function getChefs():Promise<Chef[]>{
    try{
        const response=await axios.get(baseURL+"/chef");
        const {data}=response;
        return data;
    }
    catch(error){
        throw new Error("It was not possible to connect")
    }
}