import { Route, Routes } from "react-router-dom";
import { EXPLORER_ROUTE, HOME_ROUTE } from "../constants";
import Home from "./pages/Home";
import Explorer from "./pages/explorer";

import './pages/styles/app.scss';
import Header from "./layouts/header";

const App: React.FC = () => {
  
  return (
    <div id="bushido-guide-app">
      <Header/>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home/>}></Route>
        <Route path={EXPLORER_ROUTE} element={<Explorer/>}></Route>
      </Routes>
    </div>
  )
}

export default App;