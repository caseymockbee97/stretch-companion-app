import styled from '@emotion/styled';
import { Header } from '../Components/Header';
import { CallToAction } from '../Components/CallToAction';
import { Footer } from '../Components/Footer';
import productImage from '../assets/productImage.png';

export const LandingPage = () => {
  return (
    <AppContainer>
      <Header />
      <FlexContainer>
        <CallToAction />
        <Image
          src={productImage}
          alt="Iphone stacked on top of Ipad, both showing the app."
        />
      </FlexContainer>
      <Spacer />
      <Footer />
    </AppContainer>
  );
};

const Spacer = styled.div`
  flex-grow: 1;
`;

const Image = styled.img`
  width: calc(50% - 20px);
  min-width: 300px;
  align-self: center;
  animation-name: fadeInRight;
  animation-duration: 1000ms;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: center;
  gap: 40px;
`;

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
