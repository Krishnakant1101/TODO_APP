import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Store } from './Components/Store/Store.jsx';
import { Provider } from 'react-redux'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import CounterApp from './Components/CounterApp/CounterApp.jsx';
import TodoApp from './Components/TodoApp/TodoApp.jsx';

const Router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'',
        element:<TodoApp/>
      },
      {
        path:'/CounterApp',
        element:<CounterApp/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Store}>
    <RouterProvider router={Router}/>
    </Provider>
  </StrictMode>,
)
