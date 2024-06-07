


  //components
  import Messenger from "./components/Messenger";
  import { GoogleOAuthProvider } from '@react-oauth/google';
  import AccountProvider from "./context/AccountProvider"
import React from 'react';
  
  function App() {
    return (
      <GoogleOAuthProvider clientId="830401941025-bn0hoa66s5vbh27734jl8j50hlhvr6aj.apps.googleusercontent.com">
        <AccountProvider>
        <Messenger/> 
        </AccountProvider>



      </GoogleOAuthProvider>
        
    );
  }

  export default App;
