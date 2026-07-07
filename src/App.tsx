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
import * as S from "./app.styles";

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
      <S.GlobalStyle />
      <div>
        <S.HeaderWrapper>
          <S.HeaderLeftWrapper>
            <S.HeaderTitle>UOSLIFE FE</S.HeaderTitle>
            <S.HeaderMenu>
              <h4>홈</h4>
              <h4>메뉴1</h4>
              <h4>메뉴2</h4>
            </S.HeaderMenu>
          </S.HeaderLeftWrapper>
          <S.HeaderIcon>
            <FaGithub /> <FaInstagram /> <MdEdit />
          </S.HeaderIcon>
        </S.HeaderWrapper>

        <S.BackgroundSection>
          <img src={Background} alt="background" />
          <S.Content>
            <h2>시대생 프론트 아자아자</h2>
            <S.ButtonWrapper
              href="https://uoslife.team/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              바로가기
            </S.ButtonWrapper>
          </S.Content>
        </S.BackgroundSection>

        <S.InfBannerWrapper>
          <h2>무한 배너</h2>
          <S.InfBanner>
            {[...images, ...images].map((img, idx) => (
              <li key={idx}>
                <img src={img} alt={`banner-${idx}`} />
              </li>
            ))}
          </S.InfBanner>
        </S.InfBannerWrapper>

        <S.ScrollViewWrapper>
          <h2>스크롤 뷰</h2>
          <S.ScrollButton direction="left" onClick={scrollLeft}>
            ◀
          </S.ScrollButton>
          <S.ScrollView ref={scrollRef}>
            {[...images, ...images].map((img, idx) => (
              <li key={idx}>
                <img src={img} alt={`scroll-${idx}`} />
              </li>
            ))}
          </S.ScrollView>
          <S.ScrollButton direction="right" onClick={scrollRight}>
            ▶
          </S.ScrollButton>
        </S.ScrollViewWrapper>
      </div>
    </>
  );
}

export default App;
