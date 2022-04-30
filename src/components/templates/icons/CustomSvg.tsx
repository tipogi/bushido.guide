import { BITCOIN, PRIVACY } from ".";
import Bitcoin from "./svg/Bitcoin";
import NotFound from "./svg/NotFound";
import Privacy from "./svg/Privacy";

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
      default:
        return NotFound;
    }
  }
  const Icon = renderSVG();
  return (
    <div className='svg-icon' id={`${name.toLowerCase()}`}>
      <Icon />
    </div>
  );
}

export default CustomSVG;