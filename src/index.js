import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import store from './app/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error/Error';
import Create from './create/Create';
import Blog from './blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
    <Auth0Provider
      domain="dev-y7v1aexm.us.auth0.com"
      clientId="uFzUJ6ULGaRDZksAKoVXaABQEGdFU4T2"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <React.StrictMode>
        <RouterProvider router={router} />
        {/* <App /> */}
      </React.StrictMode>
    </Auth0Provider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();