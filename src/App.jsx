import React, { useState, useEffect } from "react";
import "./App.css";
import { getInfos } from "./api/getInfo";
import GetUi from "./componants/ui";

function App() {
  const [state, setState] = useState(null);

  const FetchData = () => {
    getInfos().then((infos) => {
      setState(infos);
    });
  };

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div>
      {/* Check if state, state.results, and state.results[0] are available */}
      {state && state.results && state.results[0] ? (
        <div>
          <GetUi
            url={state.results[0].picture.large}
            email={state.results[0].email}
            title={state.results[0].name.title}
            first={state.results[0].name.first}
            last={state.results[0].name.last}
            state={state.results[0].location.state}
            country={state.results[0].location.country}
          ></GetUi>
          <button onClick={FetchData} className="btn">
            New User
          </button>
        </div>
      ) : (
        <>
          <p>Loading...</p>
        </>
      )}
    </div>
  );
}

export default App;
