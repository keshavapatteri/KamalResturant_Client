import axios from "axios";

export const axiosInstance= axios.create({
    baseURL: `http://localhost:3000/v1`,
    
    
}


)
console.log(`${import.meta.env.VITE_API_URL}`);

// 