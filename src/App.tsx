import { Button } from "react-bootstrap";
import NavbarMenu from "./components/NavbarMenu";
import Introduction from "./components/Introduction/Introduction";
import Services from "./components/Services/Services";
import DynamicForm from "./components/DynamicForm/DynamicForm";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Introduction />
      <Services />
      <DynamicForm />
    </div>
  );
}

export default App;
