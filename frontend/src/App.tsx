import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    (async () => {
      const errorData = await fetch("http://localhost:1234/api/v1/error")
        .then((result) => {
          if (!result.ok) throw new Error(result.statusText);
          return result.json();
        })
        .catch((err) => {
          console.log("asdf ERROR", err);
        });

      const successData = await fetch("http://localhost:1234/api/v1/get-all")
        .then((result) => {
          if (!result.ok) throw new Error(result.statusText);
          return result.json();
        })
        .catch((err) => {
          console.log("asdf ERROR", err);
        });

      console.log("ERROR -->", errorData);
      console.log("SUCCESS -->", successData);
    })();
  }, []);

  return <h1>This is a heading</h1>;
};

export default App;
