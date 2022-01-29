import React, { useEffect, useState } from 'react'
function App() {
  const [a, setA] = useState<number>()
  useEffect(() => {
    console.log(a)
    console.log(2)
  }, [])
  return <div className="App">123</div>
}

export default App
