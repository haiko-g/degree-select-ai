import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GoogleGenerativeAI } from '@google/generative-ai'


// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

async function run() {
  const prompt = "I will give you questions and answers for this questions and a college degree. Correlate the answers to the degree in a funny way and why the person should study this degree depending on their answers"

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}



function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    console.log(import.meta.env.VITE_API_KEY)
  run()
  },[])

  return (
    <>
      
    </>
  )
}

export default App
