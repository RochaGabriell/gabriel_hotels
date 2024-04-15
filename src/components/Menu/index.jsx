import logo from '../../assets/genetic-data.svg';
import dashboard from '../../assets/dashboard.svg';
import home from '../../assets/home-icon.svg';
import about from '../../assets/about-icon.svg';
import blog from '../../assets/blog.svg';

import {
  MenuWrapper,
  MenuItem,
  MenuLogo,
  MenuList,
  MenuListItem,
  MenuListItemLink,
} from './styles';

const Menu = (props) => {
  return (
    <MenuWrapper $visMenu={props.visMenu}>
      <MenuItem>
        <MenuLogo>
          <img src={logo} alt="Logo" />
          <p>Gabriel Hoteis</p>
        </MenuLogo>

        <MenuList>
          <MenuListItem>
            <MenuListItemLink to="/">
              <img src={home} alt="Home" />
              Home
            </MenuListItemLink>
          </MenuListItem>
          <p>Páginas</p>
          <MenuListItem>
            <MenuListItemLink to="/blog">
              <img src={blog} alt="Blog" />
              Blog
            </MenuListItemLink>
          </MenuListItem>
          <MenuListItem>
            <MenuListItemLink to="/login">
              <img src={home} alt="Products" />
              Login
            </MenuListItemLink>
          </MenuListItem>
          <MenuListItem>
            <MenuListItemLink to="/about">
              <img src={about} alt="About" />
              Sobre
            </MenuListItemLink>
          </MenuListItem>
        </MenuList>
      </MenuItem>
    </MenuWrapper>
  );
};

export default Menu;
