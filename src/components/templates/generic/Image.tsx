import { useState } from "react";
import { MdBrokenImage, MdOutlineImageNotSupported } from "react-icons/md";
import { FcRemoveImage } from "react-icons/fc";
import { BsFileEarmarkImage, BsFillFileImageFill } from "react-icons/bs";

interface ImageProps {
  iconUrl: string;
  name: string;
}

const imgStyle = {
  fontSize: '1.25rem',
  //filter: 'grayscale(1)'
  color: 'rgb(75, 76, 77)'
}

const Image: React.FC<ImageProps> = ({ iconUrl, name }) => {

  const [imgNotFound, setNotFound] = useState(false);

  if (imgNotFound){
    return (
      <div className="img-container">
        <MdBrokenImage style={imgStyle}/>
      </div>
    )
  }

  return (
    <div className="img-container">
      <img className="domain-img" id={`img-${name}`}src={iconUrl} onError={() => setNotFound(true)}></img>
    </div>
  )
}

export default Image;