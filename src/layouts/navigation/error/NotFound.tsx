import { Link } from "react-router-dom"
import "./not-found.style.scss"

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="circle-container-one">
        <div className="circle-container-two">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="main">
            <h1>The requested pages does not exist</h1>
            <Link to="">
              <button>bushido</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}