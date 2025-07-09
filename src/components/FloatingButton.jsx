import { useRef } from "react";
import { Link } from "react-router-dom";
const FloatingButton = () => {
  const fabRef = useRef(null);

  const handleToggle = () => {
    fabRef.current.classList.toggle("fab-active");
  };

  return (
    <div
      id="floating-snap-btn-wrapper"
      ref={fabRef}
      style={{
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
      }}
      className="fab left"
      onClick={handleToggle}
    >
      <div className="fab-btn">
        {/* <ion-icon name="share-social"></ion-icon> */}
        {/* <ion-icon style={{ fontSize: "1.8em" }} name="options"></ion-icon> */}
        <ion-icon style={{ fontSize: "1.8em" }} name="logo-buffer"></ion-icon>
      </div>

      <ul>
        <li>
          <Link
            to="https://www.linkedin.com/in/neelam-r/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkeIn"
          >
            <ion-icon
              style={{ fontSize: "1.4em", paddingTop: "0.2em" }}
              name="logo-linkedin"
            ></ion-icon>
          </Link>
        </li>
        <li>
          <Link
            to="https://x.com/home"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <ion-icon
              style={{ fontSize: "1.4em", paddingTop: "0.2em" }}
              name="logo-twitter"
            ></ion-icon>
          </Link>
        </li>
        <li>
          <Link
            to="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <ion-icon
              style={{ fontSize: "1.4em", paddingTop: "0.2em" }}
              name="logo-github"
            ></ion-icon>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FloatingButton;
