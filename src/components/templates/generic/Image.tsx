import { useState } from "react";
import { MdOutlineImageNotSupported } from "react-icons/md";
import { FcRemoveImage } from "react-icons/fc";

interface ImageProps {
  iconUrl: string
}

const imgStyle = {
  fontSize: '2em',
  filter: 'grayscale(1)'
}

const Image: React.FC<ImageProps> = ({ iconUrl }) => {

  const [imgNotFound, setNotFound] = useState(false);

  if (imgNotFound){
    return (
      <div className="img-container" style={imgStyle}>
        <FcRemoveImage />
      </div>
    )
  }

  return (
    <div className="img-container">
      <img className="domain-img" src={iconUrl} onError={() => setNotFound(true)}></img>
    </div>
  )
}

export default Image;