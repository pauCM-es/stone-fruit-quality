import ReactDOM from 'react-dom/client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './presentation/redux/store.ts'

import { RouterProvider } from 'react-router-dom'
import { router } from './presentation/routes/routes.tsx'

import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={ store }>
    <RouterProvider
          router={ router }
        />
    </Provider>
  </React.StrictMode>
)
