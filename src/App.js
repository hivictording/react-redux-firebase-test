import "./App.css";
import Header from "./components/Header";
import People from "./components/People";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import Grid2 from "./components/muiTest/Grid2";
import FixedHeader from "./components/FixedHeader";

function App() {
  return (
    <>
      <FixedHeader />
      {/* <Header color="skyblue" /> */}
      {/* <Header1 />
      <Grid2 /> */}
      {/* <Header2 /> */}
      <People />
    </>
  );
}

export default App;
