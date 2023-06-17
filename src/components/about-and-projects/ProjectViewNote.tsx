
import { Colors } from '../../constants/colors';
import { NORMAL_SPACE } from '../../constants/constants';
import { SemiBoldText } from '../TextComponents';
import { TextDiv } from './Profile';

const ProjectViewNote = ({
    viewTechProjects,
    viewDesignProjects,
    setViewTechProjects,
    setViewDesignProjects,
}: {
    viewTechProjects: boolean;
    viewDesignProjects: boolean;
    setViewTechProjects: () => void;
    setViewDesignProjects: () => void;
}) => {
    const techSelected = viewTechProjects && !viewDesignProjects;
    const designSelected = !viewTechProjects && viewDesignProjects;

    return (
        <TextDiv display="block">
            <SemiBoldText color={Colors.yellow}>note:</SemiBoldText>
            <SemiBoldText>
                {NORMAL_SPACE}you are currently viewing my{NORMAL_SPACE}
            </SemiBoldText>
            <SemiBoldText color={Colors.pink}>
                {techSelected
                    ? 'tech projects'
                    : designSelected
                    ? 'design projects'
                    : 'projects'}
            </SemiBoldText>
            <SemiBoldText>. click{NORMAL_SPACE}</SemiBoldText>
            {techSelected ? (
                <SemiBoldText
                    color={Colors.blue}
                    hover
                    hoverColor={Colors.blue_75}
                    onClick={setViewDesignProjects}>
                    here
                </SemiBoldText>
            ) : null}
            {designSelected ? (
                <SemiBoldText
                    color={Colors.blue}
                    hover
                    hoverColor={Colors.blue_75}
                    onClick={setViewTechProjects}>
                    here
                </SemiBoldText>
            ) : null}

            <SemiBoldText>
                {NORMAL_SPACE}to switch to my
                {techSelected ? ' design ' : designSelected ? ' tech ' : ' '}
                projects.
            </SemiBoldText>
        </TextDiv>
    );
};

export default ProjectViewNote;
