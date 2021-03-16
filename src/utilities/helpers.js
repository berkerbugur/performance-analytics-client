import axios from "axios";
import {apiEndpoint} from "./constants"

const api = axios.create({
    baseURL: apiEndpoint
});

const zeroPoint = (simpleDate) => {
    return simpleDate < 10 ? '0'+simpleDate : simpleDate;
}


export {
    api,
    zeroPoint
};