import { InputGroup, FormControl, ListGroup, Button, Badge } from "react-bootstrap"
import {useState} from 'react'

export default function TodoList(props){

    const {indice} = props;
    const {liste} = props;
    const {setListe} = props;
    const {titre} = props.datas;
    const {datas} = props;
    const [inputTache, setInputTache] = useState("");
   

    let displayTaches = datas.todos.map((item, indice)=>{
    return (
            <ListGroup.Item key={"todo-" + indice}>{indice + 1}. {item}</ListGroup.Item>
        )
    })

    function add(){
        let tmp = [...liste]
        tmp[indice].todos.push(inputTache)
        setListe(tmp)
        setInputTache("")
    }

    return(
        <div>
            <h1>{titre}  <Badge pill bg="primary">{datas.todos.length}</Badge></h1>
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