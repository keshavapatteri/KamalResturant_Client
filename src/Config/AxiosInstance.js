import axios from "axios";

export const axiosInstance= axios.create({
    baseURL: `http://localhost:3005/v1`,
    withCredentials:true,
    
}


)
console.log(`api`,`${import.meta.env.VITEAPI}`);
