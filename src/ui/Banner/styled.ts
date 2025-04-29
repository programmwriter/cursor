import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  border-radius: 32px;
  width: 100%;
  max-width: 888px;
  height: 300px;
  background-color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  container-type: inline-size;
  container-name: banner;

  @container banner (max-width: 500px) {
    height: 475px;
    padding: 20px;
  }

  /* Fallback для старых браузеров */
  @supports not (container-type: inline-size) {
    @media (max-width: 1024px) {
      height: 475px;
      padding: 20px;
    }
  }
`;

const BannerImageContainer = styled.div`
  width: 475px;
  height: 100%;
  position: absolute;
  left: 475px;
  top: 0;
  border-radius: 0 32px 32px 0;
  overflow: hidden;
  background-color: #f5f5f5;

  @container banner (max-width: 700px) {
    width: 100%;
    height: 211px;
    left: 0;
    top: auto;
    bottom: 0;
    border-radius: 0 0 32px 32px;
  }

  /* Fallback для старых браузеров */
  @supports not (container-type: inline-size) {
    @media (max-width: 1024px) {
      width: 100%;
      height: 211px;
      left: 0;
      top: auto;
      bottom: 0;
      border-radius: 0 0 32px 32px;
    }
  }
`;

const BannerImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
  position: absolute;
  right: 0;
  top: 0;

  @container banner (max-width: 700px) {
    left: 50%;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  /* Fallback для старых браузеров */
  @supports not (container-type: inline-size) {
    @media (max-width: 1024px) {
      left: 50%;
      right: auto;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const BannerContent = styled.div`
  position: absolute;
  left: 40px;
  top: 32px;
  max-width: 350px;

  @container banner (max-width: 700px) {
    top: 20px;
  }

  /* Fallback для старых браузеров */
  @supports not (container-type: inline-size) {
    @media (max-width: 1024px) {
      top: 20px;
    }
  }
`;

const BannerTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: #1a1a1a;
`;

const BannerSubtitle = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
  color: #666666;
`;

export const Styled = {
  BannerContainer,
  BannerImageContainer,
  BannerImage,
  BannerContent,
  BannerTitle,
  BannerSubtitle,
};
