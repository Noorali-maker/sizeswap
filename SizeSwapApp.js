
import React, { useState } from "react";

export default function SizeSwapApp() {
  const [gender, setGender] = useState("male");
  const [itemType, setItemType] = useState("shirt");
  const [sizeInput, setSizeInput] = useState("");
  const [convertedSize, setConvertedSize] = useState("");

  const convertSize = () => {
    let result = "";
    if (gender === "male" && itemType === "shirt") {
      if (sizeInput.toLowerCase() === "m") result = "Women’s L";
      else if (sizeInput.toLowerCase() === "l") result = "Women’s XL";
      else result = "Conversion not found";
    } else if (gender === "female" && itemType === "shirt") {
      if (sizeInput.toLowerCase() === "m") result = "Men’s S";
      else if (sizeInput.toLowerCase() === "l") result = "Men’s M";
      else result = "Conversion not found";
    } else {
      result = "Conversion logic not implemented yet";
    }
    setConvertedSize(result);
  };

  return (
    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "1rem", background: "#f5f5f5" }}>
      <div style={{ background: "white", padding: "2rem", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)", maxWidth: "400px", width: "100%" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>SizeSwap</h1>
        <select value={gender} onChange={(e) => setGender(e.target.value)} style={{ marginBottom: "0.5rem", width: "100%", padding: "0.5rem" }}>
          <option value="male">Male to Female</option>
          <option value="female">Female to Male</option>
        </select>
        <select value={itemType} onChange={(e) => setItemType(e.target.value)} style={{ marginBottom: "0.5rem", width: "100%", padding: "0.5rem" }}>
          <option value="shirt">Shirt</option>
          <option value="pants">Pants</option>
          <option value="shoes">Shoes</option>
        </select>
        <input
          placeholder="Enter your size (e.g., M, L, 34x32)"
          value={sizeInput}
          onChange={(e) => setSizeInput(e.target.value)}
          style={{ marginBottom: "0.5rem", width: "100%", padding: "0.5rem" }}
        />
        <button onClick={convertSize} style={{ padding: "0.5rem", width: "100%", background: "#0070f3", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          Convert
        </button>
        {convertedSize && (
          <p style={{ marginTop: "1rem", fontSize: "1.125rem", fontWeight: "600" }}>Converted Size: {convertedSize}</p>
        )}
      </div>
    </main>
  );
}
