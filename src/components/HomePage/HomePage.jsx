import { MainContainer,SubContainer, Image } from './HomePage.styled';

const HomePage = () => {
  const logo = require('../../images/main.png');

    return (
      <MainContainer>
        <SubContainer>
          <Image src={logo} alt="logo" />
        </SubContainer>
      </MainContainer>
    );
};
export default HomePage;
