import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ProfileBox,
  ProfileHi,
  ProfileName,
  ProfileImage,
  Dropdownwrapper,
} from './styles';

const Dropdown = ({ options, defaultText }) => {
  const [state, setState] = useState(false);

  const changeState = (optionName) => {
    setState(optionName);
  };

  return (
    <>
      <ProfileBox onClick={() => changeState(!state)}>
        <ProfileHi>Olá</ProfileHi>
        <ProfileName>{defaultText.name}</ProfileName>
        <ProfileImage src={defaultText.urlProfile} alt="profile" />
      </ProfileBox>

      <Dropdownwrapper $state={state}>
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <Link to={option.url}>{option.name}</Link>
            </li>
          ))}
        </ul>
      </Dropdownwrapper>
    </>
  );
};

export default Dropdown;
