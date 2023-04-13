import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BaseRoot} from './BaseRoot'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BaseRoot>
      <App />
    </BaseRoot>
  </React.StrictMode>,
)
