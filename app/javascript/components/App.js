import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Greeting from './Greeting';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>,
    </React.Fragment>
  )
}

export default App
