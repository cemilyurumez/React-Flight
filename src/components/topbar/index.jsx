import React from "react";

import { Logo } from "../logo";
import { NavigationMenu } from "../navigation-menu";

import * as S from "./styles";

function Topbar() {
  return (
    <S.Topbar>
      <Logo />
      <NavigationMenu />
    </S.Topbar>
  );
}

export { Topbar };
