import React from 'react'
import { Router,Route,Routes, BrowserRouter } from 'react-router-dom'
import Home from "./component/Home"
export default function App() {
  return (
<>
   
   <BrowserRouter>
      <Routes>
                <Route path="/" element={<Home></Home>}></Route>
      </Routes>

   </BrowserRouter>
   
</>
  )
}
