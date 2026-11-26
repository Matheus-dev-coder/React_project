import sytles from '../project/Project.module.css'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ServiceForm( { handleSubmit, BtnText, projectData } ) {

 const [service, setService] = useState({})

 function submit() {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
 }

 function handleChange(e) {
   setService({ ...service, [e.target.name]: e.target.value })
 }

  return (
    <form onSubmit={submit} className={sytles.form}>
        <Input
            type="text"
            text="Nome do serviço"
            name="name"
            placeholder="Insira o nome do serviço"
            handleOnChange={handleChange}
        />
        <Input
            type="number"
            text="Custo do serviço"
            name="cost"
            placeholder="Insira o valor total do serviço"
            handleOnChange={handleChange}
        />
        <Input
            type="text"
            text="Descrição do serviço"
            name="description"
            placeholder="Descreva o serviço"
            handleOnChange={handleChange}
        />
        <SubmitButton text={BtnText} />
    </form>
  )
 }

export default ServiceForm;