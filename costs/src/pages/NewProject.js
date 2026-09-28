import React from './NewPoject.module.css'

function Newproject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Crie um novo projeto</h1>
      <p>Crie seu projeto depois adicione os serviços.</p>
      <p>Seu formulário estará aqui.</p>
      <ProjectForm />
    </div>
  );
}

export default Newproject;