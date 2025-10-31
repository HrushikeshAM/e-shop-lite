import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

export default function Products() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    fetchProducts()
      .then(setItems)
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p style={{ padding: 16 }}>Loading...</p>;
  if (err) return <p style={{ color: "red", padding: 16 }}>{err}</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, padding: 16 }}>
      {items.map((p) => (
        <div key={p._id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 16 }}>
          <div style={{ fontWeight: 700 }}>{p.title}</div>
          <div style={{ opacity: 0.8, margin: "8px 0" }}>{p.description}</div>
          <div>₹{p.price}</div>
          <button style={{ marginTop: 8, padding: "6px 10px", borderRadius: 6, border: "1px solid #333" }}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
