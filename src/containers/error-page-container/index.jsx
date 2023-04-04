import React from "react";
import { Link, useRouteError } from "react-router-dom";

import * as S from "./styles";

function ErrorPageContainer() {
  const error = useRouteError();

  return (
    <S.ErrorPageContainer>
      <S.Title>Bir sorun oluştu! Lütfen tekrar deneyin!</S.Title>
      <S.Error>{error?.toString()}</S.Error>
      <Link to="/">Anasayfaya Dön</Link>
    </S.ErrorPageContainer>
  );
}

export { ErrorPageContainer };
