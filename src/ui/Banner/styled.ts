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
  justify-content: flex-start;
  align-items: flex-start;
  padding: 32px;

  @media (max-width: 1024px) {
    height: 475px;
    padding: 86px 20px 20px20px;
  }
`;

const BannerImageContainer = styled.div`
  width: 475px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 0 32px 32px 0;
  overflow: hidden;
  background-color: #f5f5f5;

  @media (max-width: 1024px) {
    width: 100%;
    height: 211px;
    top: auto;
    bottom: 0;
    border-radius: 0 0 32px 32px;
  }
`;

const BannerImage = styled.img`
  width: auto;
  height: 100%;
  object-fit: contain;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: 1024px) {
    left: 50%;
    right: auto;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

const BannerContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;

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
