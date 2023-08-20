import styled from "styled-components";
import { Colors } from "../../constants/colors";
import { EN_SPACER, screens } from "../../constants/constants";
import { BoldText, SemiBoldText } from "../TextComponents";
import { redirect } from "../../constants/utils";

const IframeDiv = styled.div`
    width: 100%;
    display: none;

    ${screens.md} {
        display: flex;
        height: 600px;
    }
 `

 const MobileDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${screens.md} {
        display: none;
    }
 `

 const PrototypeLinkButton = styled.button<{right?: boolean; backgroundColor?: string; hoverColor?: string}>`
    width: fit-content;
    background-color: ${props => props.backgroundColor? props.backgroundColor : 'transparent'};
    border: 0;
    border-radius: 20em;
    padding: 0.5em 1em;
    margin-right: ${props => props.right? '0.5em' : '0'};
    margin-bottom: 0.5em;
    cursor: pointer;
    
    :hover {
        cursor: pointer;
        background-color: ${props => props.hoverColor? props.hoverColor : "transparent"};
    }
 `

const DesktopOnly = styled.div`
    display: none;

    ${screens.md} {
        display: flex;
    }

`

const FigmaProjects = () => {
    return (
        <>
            <BoldText color={Colors.yellow} fontSize="2em" mobileFontSize="1em" textAlign="center" marginBottom="0.5em">featured prototypes</BoldText>
            <IframeDiv>
                <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1);"}} width="100%" height="100%" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Figdl2LxkXuVHbLZZcwnNLB%2Fgameroom-prototype%3Ftype%3Ddesign%26t%3DqUoACOuazlFyCh9v-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D8%253A14%26node-id%3D8-14%26mode%3Ddesign" allowFullScreen></iframe>
            </IframeDiv>
            <DesktopOnly>
                <SemiBoldText marginTop="1em" fontSize="1.25em">
                    Check out my other prototypes:{EN_SPACER}
                    <SemiBoldText color={Colors.blue} hover hoverColor={Colors.blue_75} onClick={() => redirect("https://www.figma.com/file/CKGloIToiN5VlPJoaYpxCx/Travel-Log---Clean?type=design&mode=design&t=swl9MEF8UObXjxwI-1")}>
                        travelLog
                    </SemiBoldText>
                </SemiBoldText>
            </DesktopOnly>
            <MobileDiv>
                <PrototypeLinkButton right backgroundColor={Colors.blue} hoverColor={Colors.blue_75} onClick={() => redirect("https://www.figma.com/file/CKGloIToiN5VlPJoaYpxCx/Travel-Log---Clean?type=design&mode=design&t=swl9MEF8UObXjxwI-1")}>
                    <SemiBoldText color={Colors.white} mobileFontSize="0.875em" hover>travelLog</SemiBoldText>
                </PrototypeLinkButton>
                <PrototypeLinkButton backgroundColor={Colors.blue} hoverColor={Colors.blue_75} onClick={() => redirect("https://www.figma.com/file/igdl2LxkXuVHbLZZcwnNLB/gameroom-prototype?type=design&mode=design&t=swl9MEF8UObXjxwI-1")}>
                    <SemiBoldText color={Colors.white} hover mobileFontSize="0.875em">gameroom</SemiBoldText>
                </PrototypeLinkButton>
            </MobileDiv>
        </>
    );
};

export default FigmaProjects;
