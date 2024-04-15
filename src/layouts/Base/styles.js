import { styled } from 'styled-components';

const ContentWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`;

const ContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(${(props) => (props.$visMenu ? '100% - 250px' : '100%')});
  height: 100%;
  position: fixed;
  right: 0;
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  background-color: #f5f4f1;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: scroll;
  padding: 2rem 0;
`;

export { ContentWrapper, ContainerRoot, Container };
