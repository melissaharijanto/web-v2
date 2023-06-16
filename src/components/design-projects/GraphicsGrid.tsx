import styled from 'styled-components';
import EnvyBaby from '../../resources/images/graphics/envy-baby.gif';
import JPop from '../../resources/images/graphics/jpop.png';
import YuzuruHanyu from '../../resources/images/graphics/yuzuru-hanyu.png';
import { SemiBoldText } from '../TextComponents';
import { Colors } from '../../constants/colors';
import { toBehance } from '../../constants/links';
import { EM_DASH, NORMAL_SPACE } from '../../constants/constants';

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1em;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const GraphicsGrid = () => {
    return (
        <>
            <SemiBoldText
                textAlign="right"
                marginBottom="1em"
                fontSize="1.25em">
                <SemiBoldText>
                    {EM_DASH} view in{NORMAL_SPACE}
                </SemiBoldText>
                <SemiBoldText
                    hover
                    hoverColor={Colors.blue_75}
                    color={Colors.blue}
                    onClick={toBehance}>
                    behance
                </SemiBoldText>
            </SemiBoldText>
            <Grid>
                <div>
                    <Image src={EnvyBaby} />
                </div>
                <div>
                    <Image src={JPop} />
                </div>
                <div>
                    <Image src={YuzuruHanyu} />
                </div>
            </Grid>
        </>
    );
};

export default GraphicsGrid;
