import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MenuWrapper = styled.div`
  display: ${(props) => (props.$visMenu ? 'block' : 'none')};
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: #71c4ef;
  border-right: 2px solid #d4eaf7;
`;

const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const MenuLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  img {
    width: 35px;
  }

  p {
    margin-left: 10px;
    color: #1d1c1c;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding: 0px 16px;

  p {
    color: #1d1c1c;
    font-size: 0.8rem;
    font-weight: 500;
    text-transform: uppercase;
    margin: 15px 4px;
  }
`;

const MenuListItem = styled.li`
  margin: 0;
  padding: 0;
`;

const MenuListItemLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 4px;
  color: #1d1c1c;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  transition: 0.3s;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d4eaf7;
  }

  img {
    width: 20px;
    margin-right: 10px;
  }
`;

export {
  MenuWrapper,
  MenuItem,
  MenuLogo,
  MenuList,
  MenuListItem,
  MenuListItemLink,
};
