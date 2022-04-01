import React from 'react'


function Home() {
  const listItems = [1,2,3,4]

  const addItem = () => {
    const variableA = 1;
    const variableB = 3;

    return variableA + variableB
    
  }
  return (
    <><div>Home</div><button onclick={addItem} /></>
    
  )
}

export default Home
