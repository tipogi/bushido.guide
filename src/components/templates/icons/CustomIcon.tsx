// Font Awesome
import { FaDocker, FaPalette, FaRobot, FaSignature, FaSwimmingPool } from 'react-icons/fa';
// HeroIcons
import { HiCode, HiOutlineCubeTransparent } from "react-icons/hi";
//Material Icon
import { MdAnimation, MdDisabledVisible, MdEqualizer, MdExpand, MdLaptopChromebook, MdOutlineStorefront, MdPower, MdSecurity, MdSystemUpdateAlt, MdViewInAr } from 'react-icons/md';
// Flat Icons
import { FiHardDrive } from 'react-icons/fi';
// Simple Icons
import { SiAudiomack, SiHashnode } from "react-icons/si";
// Ant Design
import { AiOutlineSwap, AiOutlineCloudServer, AiTwotoneUsb, AiOutlineDatabase, AiFillAndroid, AiFillApple, AiFillBuild } from "react-icons/ai";
// IonIcons
import { IoAnalyticsSharp, IoLayersOutline, IoMailUnreadOutline, IoDocumentTextOutline, IoLogoWebComponent, IoSchool, IoExtensionPuzzleOutline, IoLibrary, IoLogoJavascript } from "react-icons/io5";
// Bootstrap
import { BsPersonBoundingBox, BsCloudCheck, BsMailbox, BsCardChecklist, BsCurrencyBitcoin, BsSim, BsGithub, BsCodeSlash, BsCreditCard2Back, BsViewList, BsAppIndicator, BsFillPlayCircleFill, BsHddNetwork } from "react-icons/bs";
// Game Icons
import { GiBrain, GiBuyCard, GiEggEye, GiFireBomb, GiFireBottle, GiMisdirection, GiWorld } from "react-icons/gi";
// Grommet-Icons
import { GrChannel, GrCluster } from "react-icons/gr";
// Devicons
import { DiGhostSmall, DiLinux } from "react-icons/di";
// VS Code
import { VscPackage } from "react-icons/vsc";


import { 
  ANALYSIS, ARTICLES, DEV, GITHUB, GUIDE, MULTIMEDIA, NEWS, P2P, PODCAST, RESOURCES, SERVICES, LINUX,
  STORE, NEWSLETTER, SWAP, EMAIL, ANIMATION, CHARTS, METRICS, TOOLS, PEOPLE, CRYPTOGRAPHY, OS, SMS,
  VPS, PRIVACY, NODE, SIDECHAIN, MEMPOOL, CARD, WALLET, MINE, TRANSACTIONS, HARDWARE, COLD_STORAGE, 
  BITCOIN, SOFTWARE, MEETUPS, ENERGY, CHANNELS, ECONOMY, IT, MIND, NOSTR, APP, REGISTRY, BOOM, 
  ANDROID, MAC, WEB, PRACTISE, COURSES, AI, EXT, ARCH, NET, SECURITY, FULLSTACK, DEVOPS, LIBRARY, JS, PALETTE, DISTRO
 } from "~/constants";
import { GoKey, GoTools } from 'react-icons/go';
import { BiCoin } from 'react-icons/bi';


interface CustomIconProps {
  name: string
}

const CustomIcon: React.FC<CustomIconProps> = ({ name }: CustomIconProps) => {
  const renderIcon = (): JSX.Element => {
    switch (name) {
      case GITHUB:
        return <BsGithub/>;
      case ANALYSIS:
        return <HiOutlineCubeTransparent/>;
      case GUIDE:
        return <GiMisdirection/>
      case DEV:
        return <BsCodeSlash/>;
      case ARTICLES:
        return <IoDocumentTextOutline/>;
      case MULTIMEDIA:
        return <BsViewList/>;
      case RESOURCES:
        return <IoLayersOutline/>;
      case PODCAST:
        return <SiAudiomack/>;
      case NEWSLETTER:
        return <BsMailbox/>;
      case NEWS:
        return <GiWorld/>;
      case SWAP:
        return <AiOutlineSwap/>;
      case P2P:
        return <GiBuyCard/>;
      case STORE:
        return <MdOutlineStorefront/>;
      case SERVICES:
        return <BsCloudCheck/>;
      case EMAIL:
        return <IoMailUnreadOutline/>;
      case ANIMATION:
        return <MdAnimation/>;
      case CHARTS:
        return <MdEqualizer/>;
      case METRICS:
        return <IoAnalyticsSharp/>;
      case TOOLS:
        return <VscPackage/>;
      case PEOPLE:
        return <BsPersonBoundingBox/>;
      case CRYPTOGRAPHY:
        return <FaSignature/>;
      case OS:
        return <FiHardDrive/>;
      case SMS:
        return <BsSim/>;
      case VPS:
        return <AiOutlineCloudServer/>;
      case PRIVACY:
        return <MdDisabledVisible/>
      case NODE:
        return <GrCluster/>
      case SIDECHAIN:
        return <MdExpand/>;
      case LINUX:
        return <DiLinux/>;
      case MEETUPS:
        return <GiFireBottle/>
      case MEMPOOL:
        return <FaSwimmingPool/>;
      case CARD:
        return <BsCreditCard2Back/>;
      case WALLET:
        return <GoKey/>;
      case MINE:
        return <MdViewInAr/>;
      case TRANSACTIONS:
        return <BsCardChecklist/>;
      case COLD_STORAGE:
        return <AiTwotoneUsb/>
      case HARDWARE:
        return <GoTools/>
      case BITCOIN:
        return <BsCurrencyBitcoin/>
      case SOFTWARE:
        return <MdLaptopChromebook/>;
      case PALETTE:
        return <FaPalette/>;
      case DISTRO:
        return <MdSystemUpdateAlt/>;
      case ENERGY:
        return <MdPower/>;
      case CHANNELS:
        return <GrChannel/>
      case ECONOMY:
        return <BiCoin/>
      case MIND:
        return <GiBrain/>;
      case IT:
        return <AiOutlineDatabase/>
      case NOSTR:
        return <GiEggEye/>;
      case APP:
        return <BsAppIndicator/>;
      case REGISTRY:
        return <DiGhostSmall/>;
      case BOOM:
        return <GiFireBomb/>;
      case ANDROID:
        return <AiFillAndroid/>;
      case MAC:
        return <AiFillApple/>;
      case WEB:
        return <IoLogoWebComponent/>;
      case PRACTISE:
        return <BsFillPlayCircleFill/>;
      case COURSES:
        return <IoSchool/>;
      case LIBRARY:
        return <IoLibrary/>;
      case JS:
        return <IoLogoJavascript/>;
      case AI:
        return <FaRobot/>;
      case EXT:
        return <IoExtensionPuzzleOutline/>;
      case ARCH:
        return <AiFillBuild/>
      case NET:
        return <BsHddNetwork/>
      case FULLSTACK:
        return <SiHashnode/>
      case SECURITY:
        return <MdSecurity/>
      case DEVOPS:
        return <FaDocker/>
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
