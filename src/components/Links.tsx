import { Colors } from '../constants/colors';
import { SPACER } from '../constants/constants';
import { emailMe, toGithub, toLinkedIn, toResume } from '../constants/links';
import { TextDiv } from './Profile';
import { BoldText, SemiBoldText } from './TextComponents';

const Links = () => {
    return (
        <>
            <TextDiv>
                <BoldText fontSize="2.5em">about</BoldText>
            </TextDiv>
            <TextDiv>
                <BoldText
                    marginBottom="0.25em"
                    fontSize="3.5em"
                    color={Colors.yellow}>
                    good to see you here.
                </BoldText>
                <SemiBoldText
                    marginBottom="1em"
                    fontSize="1em"
                    lineHeight="1.5"
                    textAlign="justify">
                    my name is melissa, and my passion for web development
                    started when i learnt basic HTML and CSS when i was 14,
                    driven by my hobby of graphic design. afterwards, i learnt
                    that web development involves more than just designing, but
                    it only increases my enthusiasm in it as there is so much to
                    learn. i enjoy applying the things i learnt to the projects
                    i make or participate in.
                </SemiBoldText>
                <SemiBoldText fontSize="1.25em">
                    <SemiBoldText
                        color={Colors.blue}
                        hover
                        hoverColor={Colors.blue_75}
                        onClick={toGithub}>
                        github
                    </SemiBoldText>
                    <SemiBoldText>{SPACER}</SemiBoldText>
                    <SemiBoldText
                        color={Colors.blue}
                        hover
                        hoverColor={Colors.blue_75}
                        onClick={toLinkedIn}>
                        linkedin
                    </SemiBoldText>
                    <SemiBoldText>{SPACER}</SemiBoldText>
                    <SemiBoldText
                        color={Colors.blue}
                        hover
                        hoverColor={Colors.blue_75}
                        onClick={toResume}>
                        resume
                    </SemiBoldText>
                    <SemiBoldText>{SPACER}</SemiBoldText>
                    <SemiBoldText
                        color={Colors.blue}
                        hover
                        hoverColor={Colors.blue_75}
                        onClick={emailMe}>
                        email
                    </SemiBoldText>
                </SemiBoldText>
            </TextDiv>
        </>
    );
};

export default Links;
