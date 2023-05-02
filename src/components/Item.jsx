import { ProductContainer, Circle, Image, Info, Icon } from '../utils/styledComponents';

const Item = ({ stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>
                <Icon>
                    <strong>$ {price}</strong>
                </Icon>
                <Icon>
                    {stock} unid.
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    Details
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item