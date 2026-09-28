function ProjectForm() {
    return (
        <form>
            <div>
              <input type="text" placeholder="Nome do projeto" />
            </div>
            <div>
              <input type="number" placeholder="Orçamento do projeto" />
            </div>
            <div>
               <select name="category_id" id="category">
                   <option disabled>Selecione uma categoria</option>
               </select>
            </div>
            <div>
                <input type="submit" value="Criar projeto" />
            </div>
        </form>
    )
}
export default ProjectForm;