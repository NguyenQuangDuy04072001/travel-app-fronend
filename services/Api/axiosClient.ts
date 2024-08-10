import axios, { AxiosRequestHeaders, InternalAxiosRequestConfig } from "axios";
import { API } from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StorageKey } from "@/constants/contants";

interface ConfigType {
    headerContentType: string;
}

const axiosClient = axios.create({
    baseURL: API.BASE_URL,
    timeout: 10000,
});

// Add a request interceptor
axios.interceptors.request.use(
    async function (config: InternalAxiosRequestConfig<ConfigType>) {
        const accessToken = await AsyncStorage.getItem(StorageKey.ACCESS_TOKEN);
        const headers = {
            "Content-Type": config?.data?.headerContentType || "application/json",
        };
        config.headers = {
            ...headers,
            Accept: "application/json, text/plain, */*",
            Authorization: `Bearer ${accessToken ? accessToken : ""}`,
        } as AxiosRequestHeaders;
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
axios.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);

export default axiosClient;