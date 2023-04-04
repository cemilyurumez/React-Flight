import React from "react";
import { useEffect, useState } from "react";
import axiosClient from "../../axios";
import * as S from "./styles";
import { redirect, useNavigate } from "react-router-dom";


function FlightSearch() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [airports, setAirports] = useState([]);

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const [filteredAirports, setFilteredAirports] = useState([]);

    useEffect(() => {
        setLoading(true);
        axiosClient
            .get('/airports')
            .then((res) => {
                setLoading(false);
                setAirports(res.data);
                return res
            })
            .catch((err) => {
                setAirports(false);
                return err
            })
    }, [])

    function changeFrom (from){
        setFrom(from);
        const filter = airports.filter(airport => airport.code !== from);
        setFilteredAirports(filter);
        setTo(filter[0].code);
    }



    function handleSubmit(e){
        e.preventDefault();
        navigate(`/flights/${from}/${to}`);
    }


    return (
        <S.FlightSearch>
        {loading && <div>Loading...</div>}
        {!loading &&  (
            <S.SearchForm onSubmit={handleSubmit}>
                <S.Column>
                    <S.Label>Nereden</S.Label>
                    <S.InputWrapper>
                        <select onChange={(e) => changeFrom(e.target.value)} >
                            <option value="" defaultValue="">-Seçiniz-</option>
                            {airports.map((airport, index) => (
                                <option value={airport.code} key={index}>{airport.name}</option>
                            ))}
                        </select>
                    </S.InputWrapper>
                </S.Column>
                <S.Column>
                    <S.Label>Nereye</S.Label>
                    <S.InputWrapper>
                        <select name="to" onChange={(e) => setTo(e.target.value)} >
                            <option value="" defaultValue="">-Seçiniz-</option>
                            {filteredAirports.map((airport, index) => (
                                <option value={airport.code} key={index}>{airport.name}</option>
                            ))}
                        </select>
                    </S.InputWrapper>
                </S.Column>
                <S.Column>
                    <button type="submit">Ara</button>
                </S.Column>
            </S.SearchForm>
        )}
    </S.FlightSearch>
    )
}

export { FlightSearch };
