import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalStyle } from './styles/GlobalStyle'
import { RouteHandler } from './components/RouteHandler'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouteHandler />
  </React.StrictMode>,
)
