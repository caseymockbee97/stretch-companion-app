import styled from '@emotion/styled';

export const CallToAction = () => {
  return (
    <Container>
      <Text1>Actually use your stretch machine</Text1>
      <h1>The Unofficial Companion App for Your Stretch Machine</h1>
      <p>
        Stretch Companion helps you time your stretches so you actually stretch
        for how long you wanted to.
      </p>
      <AppStoreBadge href="https://apps.apple.com/us/app/vertical-scramble/id6499559832?itsct=apps_box_badge&amp;itscg=30200">
        <AppStoreImage
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1715040000"
          alt="Download on the App Store"
        />
      </AppStoreBadge>
    </Container>
  );
};

const AppStoreBadge = styled.a`
  display: inline-block;
  overflow: hidden;
  border-radius: 13px;
  width: 250px;
  height: 83px;
`;
const AppStoreImage = styled.img`
  border-radius: 13px;
  width: 250px;
  height: 83px;
`;
const Container = styled.div`
  width: calc(50% - 20px);
  min-width: 300px;
  text-align: left;
  animation-name: fadeInLeft;
  animation-duration: 1000ms;
`;
const Text1 = styled.p`
  color: var(--persian-orange);
`;
