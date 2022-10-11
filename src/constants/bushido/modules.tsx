import { IconType } from "react-icons";
import { BiAbacus, BiLibrary } from "react-icons/bi";
import { GiCrossroad } from "react-icons/gi";
import { EXPLORER_ROUTE, MARKET_ROUTE } from "../routes.constants";

interface IModule {
    icon: IconType,
    description: JSX.Element,
    link: string,
}

export const modules: IModule[] = [
    { 
        icon: GiCrossroad,
        description: main(),
        link: '',
    },
    { 
        icon: BiLibrary,
        description: explorer(),
        link: EXPLORER_ROUTE,
    },
    { 
        icon: BiAbacus,
        description: market(),
        link: MARKET_ROUTE
    }
];

function main() {
    return (
        <div className='description-block'>
            In the era of information, there is abundant information spread out in the cyberspace and we spend some of our precious time, filtering that one. <span>bushido.guide</span> was created with a clear aim: Separate the valuable content from noise. That filter is based on a subjective experience so, it may not be everyone's liking. With that exercise, it does not want to convince people that this is the right path because each individual has to experience it its own trip
        </div>
    );
}

function explorer() {
    return (
        <div className='description-block'>
            The main focus of bushido.guide is <span>bitcoin</span>: A decentralise protocol to transfer value. As a result of that, there is an <span>explorer</span> which splits different rabbit holes that are to empower the individual skills and liberty but there is a specific one to learn and touch that pseudonymous digital cash
        </div>
    )
}

function market() {
    return (
        <div className='description-block'>
            Once you fall down through the rabbit holes, it would be time to start using the digital cash freely in different places without the permission of any third party. For that there is a <span>market</span> which you can see the different p2p offers created in different decentralise exchanges. You cannot buy directly there but you can make an idea what kind of offers are in different markets
        </div>
    )
}