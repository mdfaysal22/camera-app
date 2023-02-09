import { Button, Container, Navbar } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";
import './App.css';

function App() {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>My-Camera-app</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button variant="outline-dark">
                <IoIosArrowBack></IoIosArrowBack>
              </Button>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container-sm mx-auto camera-container">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reprehenderit minus, ipsam eligendi est voluptatibus vel. Alias ipsum tempore eos?</h1>

      </div>
    </div>
  );
}

export default App;
