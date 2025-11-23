import React, { useState } from "react";

function Home() {
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (!longUrl || !customCode) return;

    const short = `https://cpit405.co/${customCode}`;
    setShortUrl(short);
  };

  return (
    <div style={{ width: "60%", margin: "40px auto", textAlign: "center" }}>
      <h2>Link Shrinker</h2>

      <div style={{ textAlign: "left" }}>
        <label>Long URL:</label>
        <input
          type="text"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />

        <label style={{ marginTop: "10px", display: "block" }}>
          Enter short code:
        </label>
        <input
          type="text"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
          style={{ width: "100%", padding: "8px" }}
        />

        <button
          onClick={handleShorten}
          style={{
            marginTop: "15px",
            padding: "10px 20px",
            background: "#2196f3",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Shorten
        </button>
      </div>

      {shortUrl && (
        <div style={{ marginTop: "20px", fontSize: "18px" }}>
          <strong>Short URL:</strong>
          <p>{shortUrl}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
