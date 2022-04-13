import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EXPLORER_ROUTE, HOME_ROUTE } from "../constants";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer";

import './pages/styles/app.scss';

const App: React.FC = () => {
  return (
    <div id="bushido-guide-app">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home/>}></Route>
          <Route path={EXPLORER_ROUTE} element={<Explorer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;