import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Menu from '../../components/Menu';
import Header from '../../components/Header';

import { ContentWrapper, ContainerRoot, Container } from './styles';

function App() {
  const [visMenu, setVisMenu] = useState(
    window.innerWidth <= 768 ? false : true
  );

  function handleVisMenu() {
    setVisMenu((prevState) => !prevState);
  }

  return (
    <ContentWrapper>
      <Menu visMenu={visMenu} />
      <ContainerRoot $visMenu={visMenu}>
        <Header handleVisMenu={handleVisMenu} />
        <Container>
          <Outlet />
        </Container>
      </ContainerRoot>
    </ContentWrapper>
  );
}

export default App;
