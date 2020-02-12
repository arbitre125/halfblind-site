import React, { useState } from "react";
import Nav from "./containers/Nav";
import GameWindow from "./containers/GameWindow";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [post, setPost] = useState("");
  const [response, setResponse] = useState("");
  const [responseToPost, setResponseToPost] = useState("");

  const callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ post: post })
    });
    const body = await response.text();

    setResponseToPost(body);
  };

  callApi()
    .then(res => setResponse(res.express))
    .catch(err => console.log(err));

  return (
    <>
      <div style={{ marginBottom: 30 }}>
        <Nav />
      </div>
      <div>
        <GameWindow size={640} />
      </div>
      <p>{response}</p>
      <form onSubmit={handleSubmit}>
        <p>
          <strong>Post to Server:</strong>
        </p>
        <input
          type="text"
          value={post}
          onChange={e => setPost(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <p>{responseToPost}</p>
    </>
  );
}

export default App;
