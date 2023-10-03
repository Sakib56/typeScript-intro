import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SpaceXData from './Pages/SpaceXData/SpaceXData.tsx'
import Home from './Pages/Home/Home.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/spacex',
        element: <SpaceXData />
      }
    ]
  },
]);

const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
)
