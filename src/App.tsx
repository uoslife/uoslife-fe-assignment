import { useRef } from "react";
import { FaInstagram, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Background from "./assets/background.jpeg";
import img1 from "./assets/image/1.jpg";
import img2 from "./assets/image/2.jpg";
import img3 from "./assets/image/3.jpg";
import img4 from "./assets/image/4.jpg";
import img5 from "./assets/image/5.jpg";
import img6 from "./assets/image/6.jpg";
import img7 from "./assets/image/7.jpg";
import img8 from "./assets/image/8.jpg";
import "./App.css";
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

function App() {
  const scrollRef = useRef<HTMLUListElement>(null);
  const scrollLeft = () => {
    scrollRef.current?.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollTo({
      left: scrollRef.current.scrollWidth,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div>
        <header className="header-wrapper">
          <div className="header-left-wrapper">
            <div className="header-title">UOSLIFE FE</div>
            <div className="header-menu">
              <h4>홈</h4>
              <h4>메뉴1</h4>
              <h4>메뉴2</h4>
            </div>
          </div>
          <div className="header-icon">
            <FaGithub /> <FaInstagram /> <MdEdit />
          </div>
        </header>
        <div className="background">
          <img src={Background} />
          <div className="content">
            <h2>시대생 프론트 아자아자</h2>
            <div
              className="button-wrapper"
              onClick={() => window.open("https://uoslife.team/", "_blank")}
            >
              <FaExternalLinkAlt />
              바로가기
            </div>
          </div>
        </div>
        <div className="infbanner-wrapper">
          <h2>무한 배너</h2>
          <ul className="infbanner">
            {[...images, ...images].map((img, idx) => (
              <li key={idx}>
                <img src={img} />
              </li>
            ))}
          </ul>
        </div>
        <div className="scrollview-wrapper">
          <h2>스크롤 뷰</h2>
          <button className="left-btn" onClick={scrollLeft}>
            ◀
          </button>
          <ul className="scrollview" ref={scrollRef}>
            {[...images, ...images].map((img, idx) => (
              <li key={idx}>
                <img src={img} />
              </li>
            ))}
          </ul>
          <button className="right-btn" onClick={scrollRight}>
            ▶
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
