// Font Awesome
import { FaGithub, FaStore, FaCloud, FaToolbox, FaSignature } from 'react-icons/fa';
// HeroIcons
import { HiCubeTransparent, HiCode } from "react-icons/hi";
//Material Icon
import { MdArticle, MdMarkEmailUnread, MdAnimation, MdSimCard, MdExpand } from 'react-icons/md';
// Flat Icons
import { FiHardDrive } from 'react-icons/fi';
// Remix Icon
import { RiCodeBoxLine } from 'react-icons/ri';
// Simple Icons
import { SiSubstack, SiAudiomack } from "react-icons/si";
// Ant Design
import { AiOutlineSwap, AiOutlineCloudServer } from "react-icons/ai";
// IonIcons
import { IoBarChart, IoAnalyticsSharp } from "react-icons/io5";
// Bootstrap
import { BsPersonBoundingBox, BsCollectionPlay, BsShieldLock, BsKeyboard, BsLayersHalf } from "react-icons/bs";
// Game Icons
import { GiBuyCard, GiMisdirection } from "react-icons/gi";
// Grommet-Icons
import { GrCluster } from "react-icons/gr";

import { 
  ANALYSIS, ARTICLES, DEV, GITHUB, GUIDE, MULTIMEDIA, NEWS, P2P, PODCAST, RESOURCES, SERVICES,
  STORE, NEWSLETTER, SWAP, EMAIL, ANIMATION, CHARTS, METRICS, TOOLS, PEOPLE, CRYPTOGRAPHY, OS, SMS, VPS, PRIVACY, NODE, SIDECHAIN
 } from "~/constants";


interface CustomIconProps {
  name: string
}

const CustomIcon: React.FC<CustomIconProps> = ({ name }: CustomIconProps) => {
  const renderIcon = (): JSX.Element => {
    switch (name) {
      case GITHUB:
        return <FaGithub/>;
      case ANALYSIS:
        return <HiCubeTransparent/>;
      case GUIDE:
        return <GiMisdirection/>
      case DEV:
        return <RiCodeBoxLine/>;
      case ARTICLES:
        return <MdArticle/>;
      case MULTIMEDIA:
        return <BsCollectionPlay/>;
      case RESOURCES:
        return <BsLayersHalf/>;
      case PODCAST:
        return <SiAudiomack/>;
      case NEWSLETTER:
        return <SiSubstack/>;
      case NEWS:
        return <BsKeyboard/>;
      case SWAP:
        return <AiOutlineSwap/>;
      case P2P:
        return <GiBuyCard/>;
      case STORE:
        return <FaStore/>;
      case SERVICES:
        return <FaCloud/>;
      case EMAIL:
        return <MdMarkEmailUnread/>;
      case ANIMATION:
        return <MdAnimation/>;
      case CHARTS:
        return <IoBarChart/>;
      case METRICS:
        return <IoAnalyticsSharp/>;
      case TOOLS:
        return <FaToolbox/>;
      case PEOPLE:
        return <BsPersonBoundingBox/>;
      case CRYPTOGRAPHY:
        return <FaSignature/>;
      case OS:
        return <FiHardDrive/>;
      case SMS:
        return <MdSimCard/>;
      case VPS:
        return <AiOutlineCloudServer/>;
      case PRIVACY:
        return <BsShieldLock/>
      case NODE:
        return <GrCluster/>
      case SIDECHAIN:
        return <MdExpand/>;
      default:
        return <HiCode/>;
    }
  }
  const Icon = renderIcon();

  return (
    <div className='react-icons icon' id={`${name.toLowerCase()}`}>
      { Icon }
    </div>
  );
}

export default CustomIcon;
