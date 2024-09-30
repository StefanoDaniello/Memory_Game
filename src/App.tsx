import { ContextProvider } from "./store/context";
import HeaderComp from "./components/HeaderComp";
import MainComp from "./components/MainComp";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <HeaderComp></HeaderComp>
      <MainComp></MainComp>
    </ContextProvider>
  );
}

export default App;
