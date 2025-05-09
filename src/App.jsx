import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import products from "./data/products";
import CheckoutButton from "./components/CheckoutButton";
import ThankYou from "./pages/thank_you";

function Home() {
  return (
    <div className="container">
      <h1> TomWills Digital Store</h1>
      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} width="150" />
            <h2>{product.title}</h2>
            <p>₦{product.price}</p>
            <CheckoutButton product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
    </Router>
  );
}

export default App;
