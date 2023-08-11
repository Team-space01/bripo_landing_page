import "./App.css";
import { element } from "./Routes/MainRouter";
import {RouterProvider} from "react-router-dom"

const App = () => {
  return (
    <>
    <RouterProvider router={element}/>
    </>
  );
};

export default App;
