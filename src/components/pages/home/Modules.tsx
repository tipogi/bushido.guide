import { modules } from '~/constants/bushido';

import './styles/modules.scss';

export default function Modules() {
    
    function renderModules() {
        return modules.map((module, index) => {
            return (
                <div className='module-block' key={`text-${index}`}>
                    <div className='block-icon'>
                        { module.icon}
                    </div>
                    <div className='block-description'>
                        { module.description }
                    </div>
                </div>
            )
        })
    }

    return (
        <div id="module-view" className="block">
            { renderModules()}
        </div>
    )
}