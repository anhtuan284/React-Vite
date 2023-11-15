import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MyComponent from './component/MyComponent.tsx'
import PackingList from './component/PackingList.tsx'
import ListPeople from './component/ListPeople.tsx'
import TestCallback from './component/TestCallback.tsx'
import EmailPerson from './component/EmailPerson.tsx'
import TestImmer from './component/ImmerObj.tsx'
import Artists from './component/Artists.tsx'
import BucketList from './component/BuckeList.tsx'
import ShoppingCart from './component/Cart.tsx'
import TaskApp from './component/ToDoApp/AppToDo.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <>
    {/* <App /> */}
    <PackingList />
    <ListPeople></ListPeople>
    <TestCallback/>
    <EmailPerson/>
    <TestImmer/>
    <Artists/>
    <BucketList/>
    <ShoppingCart/>
    <TaskApp/>
  </>
  // </React.StrictMode>,
)
