import './App.css';
import {Button, Col, Container, Row, InputGroup, FormControl, ListGroup} from 'react-bootstrap'

import AppNavbar from './components/AppNavbar/AppNavbar';
import {useState} from 'react'

function App() {
  const [inputTache, setInputTache] = useState("");
  const [taches, setTaches] = useState([]);

  let displayTaches = taches.map((item, indice)=>{
    return (
      <ListGroup.Item>{indice + 1}. {item}</ListGroup.Item>
    )
  })

  function add(){
    let tmp = [...taches]
    tmp.push(inputTache)
    setTaches(tmp)
    setInputTache("")
  }
  
  return (
    <div className="App">
      <AppNavbar />
      <header className="App-header">
        <Container>
          <Row className="mt-4">
            <Col md={6}>
              <h1>Ma TodoList</h1>
              <hr />

              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Saisir une tache" value={inputTache}
                  onChange={(e)=>{setInputTache(e.target.value)}}
                />
                <Button variant="outline-primary" onClick={add}>
                  Ajouter une tache
                </Button>
              </InputGroup>

              <ListGroup variant="flush">
                {displayTaches}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
