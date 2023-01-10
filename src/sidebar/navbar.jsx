import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      
      <Navbar bg="primary" variant="dark">
        <div className='navbar-expand'>
          <div className='row '  bg="primary" variant="dark">
          <div className='col-3'>
          <Navbar.Brand >logo</Navbar.Brand>
          </div>
          
            <div className='col-3'>
            <Nav.Link href="#home">Home</Nav.Link></div>
            <div className='col-3'>
            <Nav.Link href="#features">Features</Nav.Link></div>
            <div className='col-3'>
            <Nav.Link href="#pricing">Pricing</Nav.Link></div>
            
          </div>
        </div>
      </Navbar>

     
    </>
  );
}

export default ColorSchemesExample;