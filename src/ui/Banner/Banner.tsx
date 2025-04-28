import { FC } from 'react';
import { Styled } from './styled';
import sertImage from '../../images/sert.png';

export const Banner: FC = () => {
  return (
    <Styled.BannerContainer>
      <Styled.BannerContent>
        <Styled.BannerTitle>Получите сертификат</Styled.BannerTitle>
        <Styled.BannerSubtitle>
          Пройдите обучение и получите официальный сертификат, подтверждающий ваши знания и навыки
        </Styled.BannerSubtitle>
      </Styled.BannerContent>
      <Styled.BannerImageContainer>
        <Styled.BannerImage src={sertImage} alt="Certificate" />
      </Styled.BannerImageContainer>
    </Styled.BannerContainer>
  );
};

