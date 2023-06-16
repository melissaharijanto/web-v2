import styled from "styled-components";
import EnvyBaby from '../../resources/images/graphics/envy-baby.gif';
import JPop from '../../resources/images/graphics/jpop.png';
import YuzuruHanyu from '../../resources/images/graphics/yuzuru-hanyu.png';

const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1em;
`

const Image = styled.img`
    width: 100%;
    height: auto;
`

const GraphicsGrid = () => {
    return (
        <Grid>
            <div>
                <Image src={EnvyBaby}/>
            </div>
            <div>
                <Image src={JPop}/>
            </div>
            <div>
                <Image src={YuzuruHanyu}/>
            </div>
        </Grid>
    )
}

export default GraphicsGrid;