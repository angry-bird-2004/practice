import { useState, useEffect } from "react"

const App = () => {
  const [message, setMessage] = useState("")

  // Fetch data from the backend when the component loads
  useEffect(() => {
    fetch('https://practice-nqtt.vercel.app/api/message')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <h1>React Frontend</h1>
      <p>{message}</p>
    </>
  )
}

export default App