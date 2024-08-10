import { API } from "./api";
import axiosClient from "./axiosClient";

const categoriesService = {
    getCategories: async () => {
        try {
            const response = await axiosClient.get(API.API_GET_CATEGORIES);
            return response.data;
        } catch (error) {
            console.error("Failed to fetch category", error);
            throw error;
        }
    }
}

export default categoriesService;