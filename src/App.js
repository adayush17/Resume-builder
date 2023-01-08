import './App.css';
import {createBrowserRouter, RouterProvider, } from "react-router-dom";
import Body from './component/Body/Body';
import Header from './component/Header/Header';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Header/>,
  },
  {
    path:"/resume-builder",
    element: <Body/>
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
