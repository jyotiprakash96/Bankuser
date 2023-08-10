import "./App.css";
import AppHeader from "./Components/AppHeader";
import PageContent from "./Components/PageContent";
import SideMenu from "./Components/SideMenu";
import { Provider, useDispatch } from "react-redux";
import ConfigureStore from "./redux/store/ConfigureStore";
import { useEffect } from "react";
import axios from "axios";
import { GET_USER_DETAILS } from "./redux/ActionTypes/ActionTypes";

const store = ConfigureStore();
function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        <div className="SideMenuContent">
          <SideMenu></SideMenu>
          <PageContent></PageContent>
        </div>
      </div>
    </Provider>
  );
}
export default App;
