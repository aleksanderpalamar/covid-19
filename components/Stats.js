import styled from 'styled-components'
import useStats from "../utils/useStats"

const StatsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 2rem;

    margin-top: 2rem;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`

const StatBlock = styled.div`
    background: #f9f9f9;
    box-shadow: 0 0 1px rgba(0,0,0,.2), 0 2px 4px rgba(0,0,0,.1);
    border-radius: 6px;
    margin-bottom: 20px;
    text-shadow: 1px 1px 1px rgba(0,0,0,.1);

    header {
        border-radius: 5px 5px 0 0;
        padding: 20px 0;
        background: #04D361;
        text-align: center;
        color: #fff;
        font-size: 2.4rem;
    }
    article {
        text-align: center;
        padding: 5px 0;
        
        h3 {
            color: #04D361;
            font-size: 1.4em;
        }
    }
`


export default function Stats({url}) {
    const {stats, loading, error} = useStats(url)

    if (!stats) return <p>Loading...</p>
    if (loading) return <p>Loading...</p>
    if (error) return <p>aconteceu algo errado...</p>

    return (
        <StatsGrid>
            <StatBlock>
                <header>{stats.confirmed.value}</header>
                <article>
                    <h3>Confirmados</h3>
                </article>
            </StatBlock>
            <StatBlock>
                <header>{stats.recovered.value}</header>
                <article>
                    <h3>Recuperados</h3>
                </article>
            </StatBlock>
            <StatBlock>
            <header>{stats.deaths.value}</header>
                <article>
                    <h3>Mortes</h3>
                </article>
            </StatBlock>
        </StatsGrid>
    )
}