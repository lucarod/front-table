import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { FilterProvider } from './contexts/filter'

import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <App />
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
