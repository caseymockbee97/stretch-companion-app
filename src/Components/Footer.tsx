import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Container>
      <Link to="/privacyPolicy">Privacy Policy</Link>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 0 10px 0;
  align-self: center;
`;
