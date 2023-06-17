import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { SemiBoldText } from '../TextComponents';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-items: center;
    border-style: none none solid none;
    border-color: ${Colors.white_75};
    border-width: 0.1em;
`;

const Tab = styled.div<{ backgroundColor?: string }>`
    border-style: solid solid none solid;
    border-color: ${Colors.white_75};
    border-width: 0.1em;
    padding: 1em;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    text-align: center;
    background: ${(props) =>
        props.backgroundColor ? props.backgroundColor : 'transparent'};
    cursor: pointer;
    width: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProjectTab = ({
    mainSelected,
    otherSelected,
    selectMainProjects,
    selectOtherProjects,
    headingOne,
    headingTwo,
}: {
    mainSelected: boolean;
    otherSelected: boolean;
    selectMainProjects: () => void;
    selectOtherProjects: () => void;
    headingOne: string;
    headingTwo: string;
}) => {
    return (
        <Grid>
            <Tab
                backgroundColor={
                    mainSelected
                        ? `linear-gradient(${Colors.blue_75}, transparent)`
                        : 'transparent'
                }
                onClick={selectMainProjects}>
                <SemiBoldText
                    fontSize="1.25em"
                    color={mainSelected ? Colors.yellow : Colors.white}
                    textAlign="center">
                    {headingOne}
                </SemiBoldText>
            </Tab>
            <Tab
                backgroundColor={
                    otherSelected
                        ? `linear-gradient(${Colors.blue_75}, transparent)`
                        : 'transparent'
                }
                onClick={selectOtherProjects}>
                <SemiBoldText
                    fontSize="1.25em"
                    color={otherSelected ? Colors.yellow : Colors.white}
                    textAlign="center">
                    {headingTwo}
                </SemiBoldText>
            </Tab>
        </Grid>
    );
};

export default ProjectTab;
