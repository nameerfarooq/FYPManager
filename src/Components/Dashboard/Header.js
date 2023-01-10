import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import'./style.css'
function Header() {
  return (
    <Navbar sticky="top" className='Navbar-out '>
      <Container>
        <Navbar.Brand className='Navbar-in' href="#home">FYPManager</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="#login" className='Navbar-in' >Hello, Muhammad Nameer</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;