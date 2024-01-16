import {createBrowserRouter} from 'react-router-dom'
import App from "../App";
import {Error404} from "../components/Error404/Error404";
import {Profile} from "../components/Profile/Profile";
import {Dialogs} from "../components/Dialogs/Dialogs";
import {addPost, state, updateNewPostText} from "../state/state";




export const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    errorElement: <Error404/>,
    children: [
        {
            path: '/profile',
            element: (
                <Profile post={state.pageProfile.post} addPost={addPost} newPostText={state.pageProfile.newPostText} updateNewPostText={updateNewPostText}/>
            )
        },
        {
            path: '/dialogs',
            element: <Dialogs message={state.message}/>
        },
        {
            path: '/page/error',
            element: <Error404/>
        }
    ]
}])