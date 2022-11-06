import { useNavigate } from 'react-router-dom';
import { modules } from '~/constants/bushido';
import Divider from './components/Divider';

import './styles/modules.scss';

export default function Modules() {

    const navigate = useNavigate();
    
    function renderModules() {
        return modules.map((module, index) => {
            return (
                <div className='module-block' key={`text-${index}`}>
                    <div className='icon-block' onClick={() => navigate(module.link)}>
                        <module.icon/>
                    </div>
                    { module.description }
                </div>
            )
        })
    }

    return (
        <div id="module-view" className="block">
            <svg className="divider" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 40" preserveAspectRatio="none">
                <path d="M1200 40L0 5 0 0 1200 0 1200 40z" className="shape-fill"></path>
            </svg>
            <div className='module-content'>
                { renderModules()}
            </div>
        </div>
    )
}