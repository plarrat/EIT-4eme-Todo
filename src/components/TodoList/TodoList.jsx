import { InputGroup, FormControl, ListGroup, Button } from "react-bootstrap"
import {useState} from 'react'

export default function TodoList(){

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

    return(
        <div>
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
        </div>
    )
}