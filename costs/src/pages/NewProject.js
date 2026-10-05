import { useHistory } from 'react-router-dom';

import React from './NewPoject.module.css'

function Newproject() {

  const history = useHistory();

  function createPost(project) {

     // initialize cost and services
     project.cost = 0;
     project.services = [];

     fetch("http://localhost:5000/projects",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
     }).then((resp => resp.json())
     .then((data) => {
       console.log(data)
         //redirect
         history.push('/projects', {message: 'Projeto criado com sucesso!'})
      })
     ).catch(err => console.log(err))
      
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Crie um novo projeto</h1>
      <p>Crie seu projeto depois adicione os serviços.</p>
      <p>Seu formulário estará aqui.</p>
      <ProjectForm  handleSubmit={createPost} btnText="Criar projeto"/>
    </div>
  );
}

export default Newproject;