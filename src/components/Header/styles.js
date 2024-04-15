import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #71c4ef;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  width: 100%;
  padding: 8px 20px;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
  }
`;

const BamburgerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  padding: 8px;
  cursor: pointer;

  img {
    width: 24px;
  }

  &:hover {
    background-color: #d4eaf7;
    border-radius: 50%;
  }
`;

export { HeaderWrapper, BamburgerBox, Button };
