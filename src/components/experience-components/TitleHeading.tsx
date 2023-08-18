import styled from "styled-components"
import { LightText } from "../TextComponents"
import { screens } from "../../constants/constants";

export const ExperienceGrid = styled.div<{notVisibleInMobile?: boolean}>`
    ${props => props.notVisibleInMobile? `
        display: none;

        
    `:`
        display: flex;
        flex-direction: column;
    ` }
    ${screens.md} {
        display: grid; 
        grid-template-columns: 4fr 3fr 3fr;
        grid-column-gap: 1em;
    }
`

const TitleDiv = styled.div`
    margin-left: 0.5em;
`
const JobHeader = () => {
    return (
        <ExperienceGrid notVisibleInMobile>
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