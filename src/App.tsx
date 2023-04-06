import { Button } from "react-bootstrap";
import NavbarMenu from "./components/NavbarMenu";
import Introduction from "./components/Introduction/Introduction";
import Services from "./components/Services/Services";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Introduction />
      <Services />
    </div>
  );
}

export default App;
