import React from "react";
import { Routes,Route } from "react-router-dom";

import SignIn from './Components/SignIn'
import SignUp from "./Components/SignUp";
import AccountPage from './Components/AccountPage'
import ProtectedRoute from "./Components/ProtectedRoute";

import {AuthContextProvider} from './Context/AuthContext'

function App() {
  return (
    <div className="App">
      <h1>FIREBASE AUTH</h1>
      <AuthContextProvider>

      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Account" element={<ProtectedRoute><AccountPage/></ProtectedRoute>}/>
      </Routes>     
      </AuthContextProvider>
      
    </div>
  );
}

export default App;
