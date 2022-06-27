import { ANALYSIS, ARTICLES, DEV, GITHUB, GUIDE, MULTIMEDIA, NEWS, P2P, PODCAST, RESOURCES, SERVICES, STORE, SUBSTACK, SWAP, EMAIL, ANIMATION, CHARTS, METRICS, TOOLS, PEOPLE, CRYPTOGRAPHY, OS, SMS, VPS } from "../../../constants";
// Font Awesome
import { FaGithub, FaBook, FaMicrophoneAlt, FaRegNewspaper, FaStore, FaCloud, FaToolbox, FaSignature } from 'react-icons/fa';
// HeroIcons
import { HiCubeTransparent, HiCode } from "react-icons/hi";
//Material Icon
import { MdOndemandVideo, MdArticle, MdMarkEmailUnread, MdAnimation, MdSimCard } from 'react-icons/md';
// Flat Icons
import { FiLayers, FiHardDrive } from 'react-icons/fi';
// Remix Icon
import { RiCodeBoxLine } from 'react-icons/ri';
// Simple Icons
import { SiSubstack } from "react-icons/si";
// Ant Design
import { AiOutlineSwap, AiOutlineColumnWidth, AiOutlineCloudServer } from "react-icons/ai";
// IonIcons
import { IoBarChart, IoAnalyticsSharp } from "react-icons/io5";
// Bootstrap
import { BsPersonBoundingBox } from "react-icons/bs";


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
        return <FaBook/>
      case DEV:
        return <RiCodeBoxLine/>;
      case ARTICLES:
        return <MdArticle/>;
      case MULTIMEDIA:
        return <MdOndemandVideo/>;
      case RESOURCES:
        return <FiLayers/>;
      case PODCAST:
        return <FaMicrophoneAlt/>;
      case SUBSTACK:
        return <SiSubstack/>;
      case NEWS:
        return <FaRegNewspaper/>;
      case SWAP:
        return <AiOutlineSwap/>;
      case P2P:
        return <AiOutlineColumnWidth/>;
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
