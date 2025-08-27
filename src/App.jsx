import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello World!</h1>
      <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center">
        Button
      </button>
      <p>This application will become a mix of quickref.me, common task guides, and a perplexity spaces chat section</p>
    </div>
  )
}

export default App
