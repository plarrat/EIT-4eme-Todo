import './App.css';
import { Col, Container, Row, Button, InputGroup, FormControl} from 'react-bootstrap'

import AppNavbar from './components/AppNavbar/AppNavbar';
import TodoList from './components/TodoList/TodoList';
import {useState} from 'react';

function App() {
  const [inputListe, setInputList] = useState()
  const [liste, setListe] = useState([])
  
  let displayListe = liste.map((item,indice)=>{
    return (
      <Col key={"liste-"+indice} md={6}>
        <TodoList title={item} />
      </Col>
    )
  })

  function add(){
    let tmp = [...liste];
    tmp.push(inputListe)
    setListe(tmp)
    setInputList("")
  }

  return (
    <div className="App">
      <AppNavbar  />
      <header className="App-header">
        <Container className="mt-5">
          <Row>
            <Col md={6}>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Création d'une liste" 
                  value={inputListe}
                  onChange={(e)=>setInputList(e.target.value)}
                />
                <Button variant="primary" onClick={add}>
                  Ajouter une liste
                </Button>
              </InputGroup>
            </Col>
          </Row>
          <Row className="mt-4">
            {displayListe}
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
