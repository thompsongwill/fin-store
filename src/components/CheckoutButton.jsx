import React from "react";
import fincraApi from "../api/fincra-api";

const CheckoutButton = ({ product }) => {
  const handleCheckout = async () => {
    try {
      const response = await fincraApi.initiateCheckout({
        currency: "NGN",
        amount: product.price,
        customer: {
          name: "John Doe",
          email: "johndoe@example.com",
        },
        paymentMethods: ["card", "bank_transfer"],
        feeBearer: "business",
        redirectUrl: "http://localhost:5173/ThankYou",
      });

      // Redirect to Fincra checkout page
      const checkoutLink = response.data?.data?.checkoutLink;
      if (checkoutLink) {
        window.location.href = checkoutLink;
      } else {
        alert("Could not initiate payment.");
      }
    } catch (err) {
      console.error("Fincra error:", err);
      alert("Something went wrong with payment.");
    }
  };

  return <button onClick={handleCheckout}>Buy Now</button>;
};

export default CheckoutButton;
