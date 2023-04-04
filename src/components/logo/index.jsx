import React from "react";

import * as S from "./styles";

import LogoImage from '../../assets/img/logo.png';


function Logo() {
  return (
    <S.Logo to="/">
        <img src={LogoImage} alt="Brand Logo" />
    </S.Logo>
  );
}

export { Logo };
