import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header headingText={"My header in a prop"} />
      <Header headingText={"My second header in a prop"} />
      <Main name={"red"}>
        <h1>Main component 1st child</h1>
      </Main>
      <Main name={"blue"}>
        <h1>Main component 2nd child</h1>
      </Main>
    </div>
  );
}

export default App;
