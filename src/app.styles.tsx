import { css, Global } from "@emotion/react";
import styled from "@emotion/styled";

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        overflow-x: hidden;
      }

      #root {
        margin: 0;
        padding: 0;
      }
    `}
  />
);

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  padding: 10px 100px 0px 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const HeaderLeftWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
`;

export const HeaderMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: left;
  color: ${({ theme }) => theme.colors.white};

  h4 {
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeaderIcon = styled.nav`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.white};
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    margin-left: 20px;
  }
`;

export const BackgroundSection = styled.section`
  width: 100%;
  min-height: 500px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    min-height: 500px;
    display: block;
    object-fit: cover;
    object-position: top;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  padding-right: 20px;
  padding-bottom: 80px;

  h2 {
    margin-bottom: 10px;
    font-size: 40px;
  }
`;

export const ButtonWrapper = styled.a`
  width: 300px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 50px;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  text-decoration: none;
`;

export const InfBannerWrapper = styled.section`
  width: 100%;
  padding: 40px 0px;
  overflow: hidden;

  h2 {
    margin: 0px 0px 0px 20px;
  }
`;

export const InfBanner = styled.ul`
  display: flex;
  flex-direction: row;
  animation: banner 20s linear infinite;

  li {
    margin-right: 20px;
    list-style: none;
  }

  img {
    width: ${({ theme }) => theme.size.imgSize};
    height: ${({ theme }) => theme.size.imgSize};
    display: block;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  li:hover img {
    transform: scale(1.1);
  }

  @keyframes banner {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

export const ScrollViewWrapper = styled.section`
  width: 100%;
  padding: 40px 0px;
  position: relative;

  h2 {
    margin: 0px 0px 0px 20px;
  }
`;

export const ScrollView = styled.ul`
  display: flex;
  justify-content: row;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  li {
    margin-right: 20px;
    list-style: none;
  }

  img {
    width: ${({ theme }) => theme.size.imgSize};
    height: ${({ theme }) => theme.size.imgSize};
  }
`;

export const ScrollButton = styled.button<{ direction: "left" | "right" }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${({ theme }) => theme.size.btnSize};
  height: ${({ theme }) => theme.size.btnSize};
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.overlay};
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  cursor: pointer;
  z-index: 10;
  ${({ direction }) => (direction === "left" ? "left: 20px;" : "right: 20px;")}

  &:hover {
    background-color: ${({ theme }) => theme.colors.overlayHover};
  }
`;
