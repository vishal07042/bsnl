import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider } from '@chakra-ui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
