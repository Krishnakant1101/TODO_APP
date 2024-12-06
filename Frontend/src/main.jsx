import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Store } from './Components/Store/Store.jsx';
import { Provider } from 'react-redux'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import CounterApp from './Components/CounterApp/CounterApp.jsx';
import TodoApp from './Components/TodoApp/TodoApp.jsx';
import UserDataTable from './Components/UserDataTable/UserDataTable.jsx';
import LoginPage from './Components/LoginPage/LoginPage.jsx';

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
      },
      {
        path:'/UserDataTable',
        element:<UserDataTable/>
      },
      {
        path:'/Login',
        element:<LoginPage/>
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
