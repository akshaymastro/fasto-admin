import { client } from "./index";

// export const newCity = (params) => client.post("drivers/newcity", params);
// export const updateCity = (params) => client.patch("city/updatecity", params);
// export const deleteCity = (_id) => client.post(`city/deletecity/${_id}`);
export const drivers = () => client.get("drivers/getdrivers");
export const driver = () => client.get("drivers/getdriver");
export const updateDriver = () => client.patch("drivers/updateUser",)
