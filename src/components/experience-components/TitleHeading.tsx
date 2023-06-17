import styled from "styled-components"
import { LightText } from "../TextComponents"

export const ExperienceGrid = styled.div`
    display: grid; 
    grid-template-columns: 4fr 3fr 3fr;
`

const TitleDiv = styled.div`
    margin-left: 0.5em;
`
const JobHeader = () => {
    return (
        <ExperienceGrid>
            <TitleDiv>
                <LightText fontSize="0.875em">POSITION</LightText>
            </TitleDiv>
            <TitleDiv>
                <LightText fontSize="0.875em">PERIOD</LightText>
            </TitleDiv>
            <TitleDiv>
                <LightText fontSize="0.875em">DESCRIPTION</LightText>
            </TitleDiv>
        </ExperienceGrid>
    )
}

export default JobHeader;