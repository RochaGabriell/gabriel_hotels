import hamburger from '../../assets/hamburger.svg';
import Dropdown from '../Dropdown';
import { HeaderWrapper, BamburgerBox, Button } from './styles';

const Header = (props) => {
  const options = [
    { name: 'EditarPerfil', url: '/login' },
    { name: 'Configurações', url: '/login' },
    { name: 'Sair', url: '/login' },
  ];
  const defaultText = {
    name: 'Gabriel',
    urlProfile: 'https://yt3.ggpht.com/yti/ANjgQV9MFgRvFIrSEd_xz0MtwsxD-UTsdbSSMLfwlF9y27oaqd9Z=s108-c-k-c0x00ffffff-no-rj',
  };

  return (
    <>
      <HeaderWrapper>
        <BamburgerBox>
          <Button onClick={props.handleVisMenu}>
            <img src={hamburger} alt="hamburger" />
          </Button>
        </BamburgerBox>
        <Dropdown options={options} defaultText={defaultText} />
      </HeaderWrapper>
    </>
  );
};

export default Header;
