import React, { useEffect, useState } from "react";

export default function Result3D() {

  const [result, setResult] = useState("---");

  useEffect(() => {
    fetch("https://api.mocki.io/v2/549a5d8b/3D")
      .then(res => res.json())
      .then(data => {
        setResult(data.result || "000");
      })
      .catch(() => setResult("Error"));
  }, []);

  return (
    <div className="card">
      <h2>Myanmar 3D Result</h2>
      <h1>{result}</h1>
    </div>
  );
}
