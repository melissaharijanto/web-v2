import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { TechProject } from '../../constants/tech-projects';
import CloseIcon from '@mui/icons-material/Close';
import { BoldText, RegularText, SemiBoldText } from '../TextComponents';
import { BULLET_POINT, EM_DASH, NORMAL_SPACE, screens } from '../../constants/constants';
import { ProjectImage } from './ProjectComponent';
import { redirect } from '../../constants/utils';

const FixedBlackBackground = styled.div`
    background-color: ${Colors.black_90};
    backdrop-filter: blur(5px);
    bottom: 0px;
    left: 0px;
    width: 100vw;
    height: 100%;
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 99;
`;

const FixedDiv = styled.div`
    background: linear-gradient(${Colors.purple}, ${Colors.black});
    border-radius: 20px;
    border: 1px solid ${Colors.white_75};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    left: 50%;
    padding: 2em;
    position: fixed;
    width: 50vw;
    text-align: center;
    top: 50%;
    transform: translate(-50%, -50%);
    white-space: pre-wrap;
    ${screens.lg} {
        width: 25vw;
    }
`;

const CloseIconDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`;

const DeploymentOrDownloadDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const ProjectDescriptionModal = ({
    project,
    closeModal,
}: {
    project: TechProject;
    closeModal: () => void;
}) => {
    const DownloadLink = () =>
        project.download ? (
            <DeploymentOrDownloadDiv>
                <BoldText
                    marginBottom="0.5em"
                    color={Colors.pink}
                    fontSize="1.125em"
                    mobileFontSize='0.75em'>
                    download link:{NORMAL_SPACE}
                </BoldText>
                <SemiBoldText
                    marginBottom="0.5em"
                    hover
                    hoverColor={Colors.blue_75}
                    color={Colors.blue}
                    onClick={() => redirect(project.download!)}
                    mobileFontSize='0.75em'>
                    here
                </SemiBoldText>
            </DeploymentOrDownloadDiv>
        ) : null;

    const DeploymentLink = () =>
        project.deployment ? (
            <DeploymentOrDownloadDiv>
                <BoldText
                    marginBottom="0.5em"
                    color={Colors.pink}
                    fontSize="1.125em"
                    mobileFontSize='0.75em'
                    >
                    deployment link:{NORMAL_SPACE}
                </BoldText>
                <SemiBoldText
                    marginBottom="0.5em"
                    hover
                    hoverColor={Colors.blue_75}
                    color={Colors.blue}
                    onClick={() => redirect(project.deployment!)}
                    mobileFontSize='0.75em'>
                    here
                </SemiBoldText>
            </DeploymentOrDownloadDiv>
        ) : null;

    const ProjectContribution = () => (
        <>
            {project.contribution ? (
                <BoldText
                    marginBottom="0.5em"
                    color={Colors.pink}
                    fontSize="1.125em"
                    mobileFontSize='0.75em'>
                    my contributions:
                </BoldText>
            ) : null}
            {project.contribution?.map((contribution) => (
                <SemiBoldText marginBottom="0.75em" mobileFontSize='0.75em'>
                    {BULLET_POINT} {contribution}
                </SemiBoldText>
            ))}
        </>
    );

    return (
        <FixedBlackBackground>
            <FixedDiv>
                <CloseIconDiv onClick={closeModal}>
                    <CloseIcon sx={{ color: `${Colors.white}` }} />
                </CloseIconDiv>
                <BoldText
                    color={Colors.yellow}
                    fontSize="2em"
                    marginBottom="0.25em"
                    mobileFontSize='1.5em'>
                    {project.name}
                </BoldText>
                <SemiBoldText marginBottom="0.5em" mobileFontSize='0.75em'>
                    {project.role} {EM_DASH} {project.duration}
                </SemiBoldText>
                <RegularText marginBottom="1em" italic mobileFontSize='0.75em'>
                    {project.type}
                </RegularText>
                <ProjectImage src={project.image} />
                <BoldText
                    marginBottom="0.5em"
                    color={Colors.pink}
                    fontSize="1.125em"
                    mobileFontSize='0.75em'>
                    tech stack used:{' '}
                </BoldText>
                {project.tech_stack.map((techStack) => (
                    <SemiBoldText marginBottom="0.5em" mobileFontSize='0.75em'>
                        {BULLET_POINT} {techStack}
                    </SemiBoldText>
                ))}
                <ProjectContribution />
                <DeploymentLink />
                <DownloadLink />
            </FixedDiv>
        </FixedBlackBackground>
    );
};

export default ProjectDescriptionModal;
