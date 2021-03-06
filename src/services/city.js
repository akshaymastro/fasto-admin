import { client } from "./index";

export const newCity = (params) => client.post("city/newcity", params);
export const updateCity = (params) => client.patch("city/updatecity", params);
export const deleteCity = (_id) => client.delete(`city/deletecity/${_id}`);
export const getCities = () => client.get("city/allcities");
