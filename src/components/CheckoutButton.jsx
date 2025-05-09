import React from "react";
import fincraApi from "../api/fincra-api";

const CheckoutButton = ({ product }) => {
  const handleCheckout = async () => {
    try {
      const response = await fincraApi.initiateCheckout({
        currency: "NGN",
        amount: product.price, // e.g. 1500
        customer: {
          name: "Customer Name",
          email: "customer@theiremail.com",
        },
        paymentMethods: ["card", "bank_transfer"],
        feeBearer: "business",
        redirectUrl: "http://localhost:5173/ThankYou",
      });

      const checkoutLink = response.data?.data?.checkoutLink;
      if (checkoutLink) {
        window.location.href = checkoutLink;
      } else {
        alert("Checkout link not found.");
      }
    } catch (err) {
      console.error("Fincra API Error:", err.response?.data || err.message);
      alert("Something went wrong with payment.");
    }
  };

  return <button onClick={handleCheckout}>Buy Now</button>;
};

export default CheckoutButton;
