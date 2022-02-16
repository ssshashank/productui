import axios from "axios";
import { networkHost, networkMethod, networkModel, networkModule } from "../constants/network";

export const userAPI={
    login:async function(data){
        try {
            const NETWORK_URL=networkHost+networkModel.users+networkMethod.post+networkModule.login;
            let response=await axios.post(NETWORK_URL,data)
            return response;
        } catch (error) {
            // console.log("Expectation at userAPI login ❌ :: ");
            return error.response
        }
    },
    signup:async function(data){
        try {
            const NETWORK_URL = networkHost + networkModel.users + networkMethod.post + networkModule.signup;
            let response = await axios.post(NETWORK_URL, data)
            return response;
        } catch (error) {
            // console.error("Expectation at userAPI login ❌ :: ", error);
            return error.response
        }
    },
    logout:async function(){

    }
}