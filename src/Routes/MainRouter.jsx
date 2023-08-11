import {createBrowserRouter} from "react-router-dom"
import Homelayout from "../Components/Layouts/Homelayout"
import HomeScreen from "../Pages/HomeScreen"


export const element = createBrowserRouter([
    {
        path:"/",
        element:<Homelayout/>,
        children:[
            {
                index:true,
                element:<HomeScreen/>
            }
        ]
    }
])

