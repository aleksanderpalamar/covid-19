import { useState } from "react"
import styled from "styled-components"

import Stats from  "../components/Stats"

import useStats from "../utils/useStats"

const CountrySelectorWrapper = styled.section`
    text-align: center;
`

export default function CountrySelector() {
    const { stats: countries, loading, error } = useStats("https://covid19.mathdro.id/api/countries")
    const [ selectedCountry, setSelectedCountry ] = useState("BR");

    if (!countries) return <p>Loading...</p>
    if (loading) return <p>Loading...</p>
    if (error) return <p>Aconteceu algo errado...</p>

    const options = Object.entries(countries.countries).map(([country, code], key) => (
        <option 
            key={key} 

            value={code.name}
            // selected={selectedCountry === code}
        >
            {code.name}
        </option>
    ))

    return (
        <CountrySelectorWrapper>
            <select onChange={e => {
              setSelectedCountry(e.target.value)              
            }}
            value={selectedCountry}
            >
                {options}
            </select>

            <Stats url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}></Stats>
        </CountrySelectorWrapper>
    )
}