import styled from 'styled-components';
import Collapsible from 'react-collapsible';

export const WrapperCentered = styled.div`
    background: rgba(255, 255, 255, 1);
    flex: 0 0 1324px;
    height: 650px;
    border-radius: 5px;
    -webkit-box-shadow: -4px 21px 90px -25px rgba(0,0,0,0.72);
    -moz-box-shadow: -4px 21px 90px -25px rgba(0,0,0,0.72);
    box-shadow: -4px 21px 90px -25px rgba(0,0,0,0.72);
`;

export const FlexNav = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
`;

export const BrandWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    width: 300px;
`;

export const Brand = styled.a`
    font-size: 2.3rem;
    color: #94c9ab;
    font-weight: 500;
`;

export const Tab = styled.a`
    font-size: 1.4rem;
    font-weight: 700;
    color: #909183;
    text-transform: uppercase;
`;

export const Img = styled.img`
    width: 500px;
    height: auto;
`;

export const JumbotronContent = styled.div`
    margin-top: 90px;
    display: flex;
    width: 90%;
    justify-content: space-around;
    margin-left: auto;
    margin-right: auto;

`;

export const TextContent = styled.div`
    margin-top: 90px;
    width: 45%;

`;

export const MainHeading = styled.h2`
    font-size: 4.5rem;
    font-weight: 700;
    margin-bottom: 35px;
    color: #393a34;
`;

export const MainParagraph = styled.p`
    font-size: 2rem;
    color: #393a34;
`;

export const DesignImages = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 28px;
    `;

export const LogInBTn = styled.a`
    font-size: 1.4rem;
    font-weight: 700;
    color: #909183;
    display: inline-block;
    text-transform: uppercase;
    border: 2px solid #909183;
    border-radius: 25px;
    margin-right: 28px;
    padding: 10px 25px;
`;


