import './App.css';
import { Col, Container, Row, Button, InputGroup, FormControl, Badge} from 'react-bootstrap'

import AppNavbar from './components/AppNavbar/AppNavbar';
import TodoList from './components/TodoList/TodoList';
import {useState, useEffect} from 'react';

function App() {
  const [inputListe, setInputList] = useState()
  const [liste, setListe] = useState([])

  let displayListe = liste.map((item,indice)=>{
    return (
      <Col key={"liste-"+indice} md={6}>
        <TodoList indice={indice} datas={item} liste={liste} setListe={setListe} />
      </Col>
    )
  })

  useEffect(()=>{
    let datas = localStorage.getItem("Eit-4eme-todos");
    datas = JSON.parse(datas);
    setListe(datas);
  }, [])

  useEffect(()=>{
    localStorage.setItem("Eit-4eme-todos", JSON.stringify(liste))
  },[liste])

  function nbTodos(liste){
    let total = 0;
    liste.forEach(elem=> total += elem.todos.length)
    return total;
  }

  function add(){
    let tmp = [...liste];
    let obj = {
      id:Date.now(),
      titre:inputListe,
      todos:[]
    }
    tmp.push(obj)
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

            <Col md={6} align="right">
              <h3>Nombre de Todos : <Badge pill bg="primary">{nbTodos(liste)}</Badge></h3>
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
