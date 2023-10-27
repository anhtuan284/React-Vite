import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MyComponent from './component/MyComponent.tsx'
import PackingList from './component/PackingList.tsx'
import ListPeople from './component/ListPeople.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <>
    {/* <App /> */}
    <PackingList />
    <ListPeople></ListPeople>
  </>
  // </React.StrictMode>,
)
