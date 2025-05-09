import axios from "axios";

const baseURL = "https://sandboxapi.fincra.com"; // Sandbox base URL

const fincraApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${import.meta.env.FIN_STORE_FINCRA_SECRET_KEY}`,
  },
});

const initiateCheckout = (payload) => fincraApi.post("/checkout", payload);

export default {
  initiateCheckout,
};
