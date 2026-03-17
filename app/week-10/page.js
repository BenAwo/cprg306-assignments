"use client";
// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import { useState, useEffect } from 'react';
import Link from 'next/link'
 
// Use the useUserAuth hook to get the user object and the login and logout functions

 
export default function Page(){
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [login, setLogin] = useState(false)

  // Sign in to Firebase with GitHub authentication
  async function handleLogin() {
    try{
      await gitHubSignIn();
    } catch (error) {
      console.error('Error:', error)
    }
  }
  
  
  // Sign out of Firebase
  async function handleLogout() {
    try{
      await firebaseSignOut();
    } catch (error) {
      console.error('Error:', error);
    }
  }
  const loginCheck = () => {
  if (user === null){
        setLogin(false)
  } else {
    setLogin(true) 
  }}

  useEffect(() => {
      loginCheck();
    }, [user]);

  // Display some of the user's information
  return(
    <main>
      <div>
      {!user && (<button onClick={handleLogin} disabled={login} className="bg-blue-400 hover:bg-yellow-600 disabled:bg-red-500 rounded m-4 p-4">Log in!</button>)}
      </div>
      {user && (
        <h1>Welcome, {user.displayName} ({user.email})<div></div>
        <button onClick={handleLogout} className="bg-blue-400 hover:bg-yellow-600 rounded m-4 p-4">Log out!</button>
        <div></div>
        <Link href="./week-10/shopping-list">Shopping List!</Link>
        </h1>
        )}
    </main>
  )
}