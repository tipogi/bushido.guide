import { Route, Routes } from 'react-router-dom';
import { ABOUT_ROUTE, EXPLORER_GENERIC_ROUTE, ROOT_ROUTE, MARKET_ROUTE,  } from '../constants';
import About from '../layouts/about';
import Explorer from './pages/explorer';
import Header from '../layouts/header';
import Market from './pages/market';
import Footer from '~/layouts/footer';

import NotFound from '~/layouts/navigation/error/NotFound';
import Index from '~/layouts/index';

import './pages/styles/app.scss';

const App: React.FC = () => {
  
  return (
    <div id="bushido-guide-app">
      <Header/>
      <Routes>
        <Route path={ROOT_ROUTE} element={<Index/>}/>
        <Route path={EXPLORER_GENERIC_ROUTE} element={<Explorer/>}></Route>
        <Route path={MARKET_ROUTE} element={<Market/>}></Route>
        <Route path={ABOUT_ROUTE} element={<About/>}></Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;