import axios from "axios";
import { IMessage } from "./interfacesAndTypes";

axios.defaults.baseURL =
  "https://688337a621fa24876a9d2a34.mockapi.io/api/message/message";

export const postMessage = async (messageData: IMessage) => {
  const data = await axios.post("", messageData);
  return data.data;
};
