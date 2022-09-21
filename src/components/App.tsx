import { Route, Routes } from 'react-router-dom';
import { EXPLORER_GENERIC_ROUTE, HOME_ROUTE, MARKET_ROUTE,  } from '../constants';
import Home from '../layouts/home';
import Explorer from './pages/explorer';
import Header from '../layouts/header';
import Market from './pages/market';
import Footer from '~/layouts/footer';

import './pages/styles/app.scss';
import NotFound from '~/layouts/navigation/error/NotFound';

const App: React.FC = () => {
  
  return (
    <div id="bushido-guide-app">
      <Header/>
      <Routes>
        <Route path={HOME_ROUTE} element={<Home/>}></Route>
        <Route path={EXPLORER_GENERIC_ROUTE} element={<Explorer/>}></Route>
        <Route path={MARKET_ROUTE} element={<Market/>}></Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;