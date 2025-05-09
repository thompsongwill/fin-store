import axios from "axios";

const baseURL = "https://sandboxapi.fincra.com/checkout/payments"; // Use production URL in prod

const fincraApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.FIN_STORE_FINCRA_PUBLIC_KEY}`,
  },
});

const initiateCheckout = (payload) => fincraApi.post("/checkout", payload);

export default {
  initiateCheckout,
};
