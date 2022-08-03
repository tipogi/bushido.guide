import { BITCOIN, PRIVACY, WALLET, SIDECHAIN, NODE, BLOCK, MINE, SATOSHI, HARDWARE, TRANSACTIONS, COLD_STORAGE } from "@/constants/icon.constants";
import NotFound from "./svg/NotFound";
import Bitcoin from "./svg/Bitcoin";
import Privacy from "./svg/Privacy";
import SideChain from "./svg/SideChain";
import Wallet from "./svg/Wallet";
import Node from './svg/Node';
import Block from "./svg/Block";
import Mining from "./svg/Mining";
import Satoshi from "./svg/Satoshi";
import Hardware from "./svg/Hardware";
import Transactions from "./svg/Transactions";
import ColdStorage from "./svg/ColdStorage";

interface CustomSVGProps {
  name: string
}

const CustomSVG: React.FC<CustomSVGProps> = ({ name }: CustomSVGProps) => {
  const renderSVG = (): React.FC => {
    switch (name) {
      case BITCOIN:
        return Bitcoin;
      case PRIVACY:
        return Privacy;
      case WALLET:
        return Wallet;
      case SIDECHAIN:
        return SideChain;
      case NODE:
        return Node;
      case BLOCK:
        return Block;
      case MINE:
        return Mining;
      case SATOSHI:
        return Satoshi;
      case HARDWARE:
        return Hardware;
      case TRANSACTIONS:
        return Transactions;
      case COLD_STORAGE:
        return ColdStorage;
      default:
        return NotFound;
    }
  }
  const Icon = renderSVG();
  return (
    <div className='custom-svg icon' id={`${name.toLowerCase()}`}>
      <Icon />
    </div>
  );
}

export default CustomSVG;