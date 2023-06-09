import styled from 'styled-components';
import { Colors } from '../constants/colors';

export const WelcomePageBackground = styled.div`
    background: linear-gradient(${Colors.purple}, ${Colors.black});
    // background: ${Colors.black};
    background-blend-mode: multiply;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    // overflow: auto;
`

export const IntroAndProjects = styled.div`
    background: linear-gradient(${Colors.black}, ${Colors.black});
    // background: ${Colors.black};
    background-blend-mode: multiply;
    width: 100vw;
    // height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: auto;

`