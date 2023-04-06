import { Container, Navbar } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

export default function NavbarMenu() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#!">
            Dynamic <b>Form</b>
          </Navbar.Brand>
          <NavbarToggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>Signed in as: vanesahernandezc</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
