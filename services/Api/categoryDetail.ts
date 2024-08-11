import { API } from "./api";
import axiosClient from "./axiosClient";

const categoryDetailService = {
    getCategoryDetail: async (id: number) => {
        try {
            const response = await axiosClient.get(`${API.API_GET_CATEGORIES}/${id}`);
            return response.data;
        } catch (error) {
            console.error("Failed to fetch category detail", error);
            throw error;
        }
    }
}

export default categoryDetailService;