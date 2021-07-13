import "../styles.css";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <header className="Header">
      <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand className="px-3">Test</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user px-2"></i>Login
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/dashboard">
                <Nav.Link>
                  <i className="fas fa-tachometer-alt px-2"></i>Dashboard
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/pending">
                <Nav.Link>
                  <i className="fas fa-history px-2"></i>Pending
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/stock">
                <Nav.Link>
                  <i className="fas fa-cubes px-2"></i>Stock
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/reports">
                <Nav.Link>
                  <i className="fas fa-chart-bar px-2"></i>Reports
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/logout">
                <Nav.Link>
                  <i className="fas fa-sign-out-alt px-2"></i>Logout
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex left">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
