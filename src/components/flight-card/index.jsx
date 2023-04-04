import React from "react";
import { format } from 'date-fns';

import * as S from "./styles";

function FlightCard({data}) {

  const formatter = ms => new Date( ms )
  .toLocaleString("tr-TR", {} )
  .replace( / /g, '-' );


  return (
    <S.FlightCard>
        <S.Title>{data.from} - {data.to}</S.Title>
        <S.Text>Gidiş Tarihi: {formatter(data.start)}</S.Text>
        <S.Text>Ekonomi: {data.economy} TL</S.Text>
        <S.Text>Business: {data.business} TL</S.Text>
    </S.FlightCard>
  );
}

export { FlightCard };
