
import React, { useEffect, useState } from "react";

export default function Result2D() {

  const [result, setResult] = useState("--");

  useEffect(() => {
    fetch("https://api.mocki.io/v2/549a5d8b/2D")
      .then(res => res.json())
      .then(data => {
        setResult(data.result || "00");
      })
      .catch(() => setResult("Error"));
  }, []);

  return (
    <div className="card">
      <h2>Myanmar 2D Result</h2>
      <h1>{result}</h1>
    </div>
  );
}
