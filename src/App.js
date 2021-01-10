import "./App.css";
import Header from "./components/Header";
import People from "./components/People";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import { Container } from "@material-ui/core";

function App() {
  return (
    <>
      <Header color="skyblue" />
      <Header1 />
      <Header2 />
      <People />
    </>
  );
}

export default App;
