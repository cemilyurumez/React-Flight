import React from "react";
import * as S from "./styles";
import { FlightCard } from "../../components/flight-card";
import { useLoaderData } from "react-router-dom";

import { AiOutlineExclamationCircle } from 'react-icons/Ai';

function FlightsPageContainer() {

  const flights = useLoaderData();

  return (
    <S.FlightPageContainer>
        { flights && flights.map((flight , index)=> (
          <FlightCard key={index} data={flight} />
        ))}

        { !flights && (
          <S.FlightNotFound>
            <AiOutlineExclamationCircle />
            <p>Aramanıza uygun uçuş bulunamadı!</p>
          </S.FlightNotFound>
        )}

    </S.FlightPageContainer>
  );
}

export { FlightsPageContainer };
