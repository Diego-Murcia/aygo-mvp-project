import axios from "axios";

const API_URL = "http://localhost:8080/configs";

export interface Config {
    ID: number;
    Key: string;
    Value: string;
    UpdatedAt: string;
}

export const getConfigs = async () => await axios.get<Config[]>(API_URL);
export const createConfig = async (config: Partial<Config>) => await axios.post(API_URL, config);
export const updateConfig = async (id: number, config: Partial<Config>) => await axios.put(`${API_URL}/${id}`, config);
export const deleteConfig = async (id: number) => await axios.delete(`${API_URL}/${id}`);
