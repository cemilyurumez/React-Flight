import React from "react";
import * as S from "./styles";
import { FlightSearch } from "../../components/flight-search";

function HomePageContainer() {

  return (
    <S.HomePageContainer>
      <S.Title>
        Merhaba!
      </S.Title>
      <S.Text className="mb-2">
        Nereyi keşfetmek istersiniz?
      </S.Text>
      <FlightSearch />
    </S.HomePageContainer>
  );
}

export { HomePageContainer };
