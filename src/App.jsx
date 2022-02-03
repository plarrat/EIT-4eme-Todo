import './App.css';
import { Col, Container, Row} from 'react-bootstrap'

import AppNavbar from './components/AppNavbar/AppNavbar';
import TodoList from './components/TodoList/TodoList';

function App() {
  
  return (
    <div className="App">
      <AppNavbar />
      <header className="App-header">
        <Container>
          <Row className="mt-4">
            <Col md={6}>
              <TodoList />
            </Col>

            <Col md={6}>
              <TodoList />
            </Col>

            <Col md={6}>
              <TodoList />
            </Col>

            <Col md={6}>
              <TodoList />
            </Col>
            
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
