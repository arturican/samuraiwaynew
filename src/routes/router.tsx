import {createBrowserRouter} from 'react-router-dom'
import App from "../App";
import {Error404} from "../components/Error404/Error404";
import {Profile} from "../components/Profile/Profile";
import {Dialogs} from "../components/Dialogs/Dialogs";
import {Page} from "../components/pages/Page";
import {dataState} from "../data/dataState";

;

export const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children: [
        {
            path: '/profile',
            element: (
                <Profile/>
            )
        },
        {
            path: '/dialogs',
            element: <Dialogs/>
        },
        {
            path: '/page/:id',
            element: <Page pages={dataState.pages}/>
        },
        {
            path: '/page/error',
            element: <Error404/>
        }
    ]
}])