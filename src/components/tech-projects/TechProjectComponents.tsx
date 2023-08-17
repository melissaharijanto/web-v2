import styled from 'styled-components';
import { Colors } from '../../constants/colors';
import { screens } from '../../constants/constants';

export const HorizontalScroll = styled.div`
    display: flex;
    flex-direction: column;
    

    ${screens.lg} {
        flex-direction: row;
        overflow-x: auto;
        white-space: nowrap;
        padding-bottom: 1em;

        ::-webkit-scrollbar {
            height: 4px;
            color: #000;
        }

        ::-webkit-scrollbar-thumb:horizontal {
            background: ${Colors.blue_25};
            border-radius: 10px;
        }
}
`;

export const ProjectContainerWrapper = styled.div`
    display: inline-flex;
    width: 100%;
    margin-bottom: 1em;
    ${screens.lg} {
        width: 500px;
        margin: 3px 1em 1em 3px;
    }
   
`;
