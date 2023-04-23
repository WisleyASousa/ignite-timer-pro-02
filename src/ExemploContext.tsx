/* eslint-disable prettier/prettier */
import { createContext, useContext, useState } from 'react'


const CyclesContext = createContext({} as any)

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContext)

  return (
    <>
      <h1>NewCycleForm: {activeCycle}</h1>
      <button 
        onClick={() => {
          setActiveCycle(activeCycle + 2)
        }}>
          Acrescentar
      </button>
    </>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContext)

  return <h1>CountDown: {activeCycle}</h1>
}

export function ExemploContext() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
      <h1 style={{color: 'red'}}>Exemplo</h1>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContext.Provider>
  )
}
