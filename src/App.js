import React, { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [isValid, setIsValid] = useState(null);

  // URL validation regex
  const validateURL = (input) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return !!pattern.test(input);
  };

  const handleChange = (e) => {
    const input = e.target.value;
    setUrl(input);
    setIsValid(validateURL(input));
  };

  return (
    <div className="container">
      <h1>🔍 URL Validator Tool</h1>
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="Enter a URL (e.g. https://example.com)"
      />
      {url && (
        <p className={isValid ? "valid" : "invalid"}>
          {isValid ? "✅ Valid URL" : "❌ Invalid URL"}
        </p>
      )}
    </div>
  );
}

export default App;
