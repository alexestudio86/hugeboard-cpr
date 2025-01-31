import { createBrowserRouter } from "react-router-dom";
import { GeneralLayout } from "../layouts/General.Layout";
  import { IsErrorView } from "../views/IsError.View";
  import { IsPrivateView } from "../views/IsPrivate.View.jsx";
    import { CPRPage } from "../pages/CPR.Page.jsx"
      import { getAccounts } from "../context/DataProvider.jsx";
    import {HomeLayout} from "../layouts/Home.Layout.jsx";
    import { LoginLayout } from "../layouts/Login.Layout.jsx";
    import '../css/val.min.css';
import '../fontAwesome.js';
import { RouterProvider } from "react-router-dom";
import { useLoginContext } from "../context/LoginProvider.jsx";


const App = () => {

  const {user} = useLoginContext();

  const router = createBrowserRouter([
    {
      element:      <GeneralLayout/>,
      errorElement: (<GeneralLayout><IsErrorView/></GeneralLayout>),
      children: [
        {
          index:      true,
          element:    <HomeLayout/>,
          path:       '/'
        },{
          element: <IsPrivateView user={user} />,
          children: [
            {
              element:  <h1>analytics</h1>,
              path:     'analytics'
            }
          ]
        },{
          element:  <CPRPage/>,
          path:     'cpr',
          loader:   getAccounts
        },{
          element:  <LoginLayout/>,
          path:     'login'
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />

}

export default App;