import "./App.css";
import { UserIcon } from "./features/users/components/UserIcon";
import { css } from "@emotion/react";

const Hoge = css({ color: "red" });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 css={Hoge}>Suitter</h1>
        <UserIcon></UserIcon>
      </header>
    </div>
  );
}

export default App;
