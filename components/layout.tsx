import Link from 'next/link';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand>Job Seeker Safe</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-space-between">
              <Link href="/" passHref>
                <Nav.Item>My Jobs </Nav.Item>
              </Link>
              <Link href="/jobboard" passHref>
                <Nav.Item>Job Board</Nav.Item>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="md-container">{children}</Container>
      <footer className="cntr-footer">Copyright © Job Seeker Safe 2021</footer>
    </>
  );
};

export default Layout;
