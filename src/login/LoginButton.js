import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0(); 

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  return <LoginIcon 
          variant="outlined" 
          size="small"
          onClick={() => handleLogin()}>
            Login
        </LoginIcon>;
};

export default LoginButton;

// import { useAuth0 } from "@auth0/auth0-react";
// import React from "react";

// export const LoginButton = () => {
//   const { loginWithRedirect } = useAuth0();

//   const handleLogin = async () => {
//     await loginWithRedirect({
//       appState: {
//         returnTo: "/profile",
//       },
//     });
//   };

//   return (
//     <button className="button__login" onClick={handleLogin}>
//       Log In
//     </button>
//   );
// };