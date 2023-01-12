import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Helmet, HelmetProvider } from "react-helmet-async";
import metadata from "./metadata.json";

const data = metadata.data.info;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <Helmet
        title="NEO HOOD ANIMAL"
        meta={[
          { name: "description", content: data.description },
          { property: "og:url", content: data.url },
          { property: "og:type", content: "website" },
          { property: "og:title", content: "NEO HOOD ANIMAL" },
          { property: "og:image", content: data.opgImg },
          {
            property: "og:description",
            content: data.description,
          },
          { name: "twitter:card", content: "summary" },
          { name: "twitter:site", content: "@Tabenomics_web3" },
          { name: "twitter:title", content: "NEO HOOD ANIMAL" },
          { name: "twitter:description", content: data.description },
          { name: "twitter:image", content: data.twitterImage },
        ]}
      />
      <App />
    </React.StrictMode>
  </HelmetProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
