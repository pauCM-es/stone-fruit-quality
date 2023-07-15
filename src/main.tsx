import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from './presentation/redux/store.ts'

import './index.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './presentation/routes/routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider
        router={ router }
      />
    </Provider>
  </React.StrictMode>,
)
