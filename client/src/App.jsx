import React from 'react'
import Mainlayout from './Layouts/Mainlayout'
// import signUpWithGoogle from './firebase/auth/SignUpWithGoogle'
function App() {

  return (
    <>
      <signUpWithGoogle></signUpWithGoogle>
      <Mainlayout ></Mainlayout>
      <h1 className="p-3">Welcome to My Portfolio</h1>
    </>
  )
}

export default App
