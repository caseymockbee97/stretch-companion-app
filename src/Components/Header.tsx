import styled from '@emotion/styled';
import titleImage from '../assets/TitleBlue.svg';

export const Header = () => {
  return (
    <Container>
      <Image src={titleImage} alt="Stretch Companion" />
    </Container>
  );
};

const Container = styled.div`
  padding: 20px 0 20px 0;
`;

const Image = styled.img`
  height: 80px;
`;
