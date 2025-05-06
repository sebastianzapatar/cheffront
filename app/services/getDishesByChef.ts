import axios from "axios";
import { Dish } from "../schemas/Dish";
const url=process.env.NEXT_PUBLIC_API_URL;
export const getDishedByChef=async(id:string):Promise<Dish[]>=>{
    try{
        const res=await axios.get(`${url}/chef/${id}/dishes`)
        return res.data;
    }catch(error){
        throw new Error("Platos no encontrados 😢");
    }
}