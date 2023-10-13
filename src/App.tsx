import styled from 'styled-components'
import { FormTaskBar } from './components/FormTaskBar'
import { Header } from './components/Header'
import { TaskContainer } from './components/TaskContainer'

const DivSpacing = styled.div `
  max-width: 736px;
  margin: 0 auto;
`


export default function App() {
  return (
    <div>
      <Header />

      {/*Conteudo Main */}
      <DivSpacing>
        <FormTaskBar />
        <TaskContainer />
      </DivSpacing>
    </div>
  )
}