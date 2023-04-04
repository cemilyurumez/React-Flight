import React from "react";

import { Topbar } from "../../components/topbar";
import { Main } from "../../components/main";

import * as S from "./styles";

function MainLayout() {
  return (
    <S.MainLayout>
      <Topbar />
      <Main />
    </S.MainLayout>
  );
}

export { MainLayout };
