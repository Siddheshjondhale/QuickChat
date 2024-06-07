

import React from 'react';
//components
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider"
 
function App() {
  return (
    <GoogleOAuthProvider clientId="658309305418-u9to8qjhan55t08hn27rhveqjotfn22m.apps.googleusercontent.com">
      <AccountProvider>
      <Messenger/> 
      </AccountProvider>



    </GoogleOAuthProvider>
      
  );
}

export default App;
