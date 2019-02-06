import styled from 'styled-components';

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
    font-size: 1.6rem;
    color: #94c9ab;
    font-weight: 500;
`;

export const Tab = styled.a`
    font-size: 1rem;
    font-weight: 700;
    color: #909183;
    text-transform: uppercase;
`;