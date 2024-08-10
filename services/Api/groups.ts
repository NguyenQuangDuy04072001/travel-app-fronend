import { API } from "./api";
import axiosClient from "./axiosClient";

const groupsService = {
    getGroups: async () => {
        try {
            const response = await axiosClient.get(API.API_GET_GROUPS);
            return response.data;
        } catch (error) {
            console.error("Failed to fetch groups", error);
            throw error;
        }
    }
}

export default groupsService;