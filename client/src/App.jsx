import React from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import {Navigate, Route,Routes} from 'react-router-dom'
import HomePage from "./Pages/HomePage";
import ProblemsPage from "./Pages/ProblemsPage";
import { useAuth } from "@clerk/clerk-react";
import { Toaster } from 'react-hot-toast'
import DashBoardPage from "./Pages/DashBoardPage";

const App = () => {
  const {isSignedIn,isLoaded} = useAuth();
  if(!isLoaded) return null;
  return (
    <>
    <Toaster position="top-center" toastOptions={{duration:3000}}/>
      <Routes>
        <Route path="/" element={!isSignedIn ? <HomePage /> : <Navigate to={"/dashboard"} />} />
        <Route path="/dashboard" element={isSignedIn ? <DashBoardPage /> : <Navigate to={"/"}/>}/>
        <Route path="/problems" element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"}/>} />
      </Routes> 
    </>
  );
};

export default App;
