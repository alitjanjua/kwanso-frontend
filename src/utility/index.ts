import axios, { AxiosRequestConfig } from "axios";
import { createBrowserHistory } from "history";

export default createBrowserHistory();

export const request = (params: AxiosRequestConfig) => axios(params);
