import styled from 'styled-components';
import { Colors } from '../constants/colors';

export const SemiBoldText = styled.span<{
    color?: string;
    italic?: boolean;
    fontSize?: string;
    marginBottom?: string;
    hover?: boolean;
    hoverColor?: string;
    lineHeight?: string;
    textAlign?: string;
}>`
    font-family: ${(props) =>
        props.italic
            ? `'Metropolis-SemiBoldItalic', 'sans-serif'`
            : `'Metropolis-SemiBold', 'sans-serif'`};
    color: ${(props) => (props.color ? props.color : Colors.white)};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '1em')};
    margin-bottom: ${(props) =>
        props.marginBottom ? props.marginBottom : '0'};
    line-height: ${props => props.lineHeight ? props.lineHeight : "normal"} !important;
    text-align: ${props => props.textAlign ? props.textAlign : "left"}

    :hover {
        color: ${(props) =>
            props.hover
                ? props.hoverColor
                    ? props.hoverColor
                    : props.color
                    ? props.color
                    : Colors.white
                : props.color
                ? props.color
                : Colors.white};
        cursor: ${(props) => (props.hover ? 'pointer' : 'default')};
        text-decoration: ${(props) => (props.hover ? 'underline' : 'none')};
    }
`;

export const BoldText = styled.span<{
    color?: string;
    fontSize?: string;
    marginBottom?: string;
}>`
    font-family: 'Metropolis-Bold', 'sans-serif';
    color: ${(props) => (props.color ? props.color : Colors.white)};
    font-size: ${(props) => (props.fontSize ? props.fontSize : '1em')};
    margin-bottom: ${(props) =>
        props.marginBottom ? props.marginBottom : '0'};
`;
