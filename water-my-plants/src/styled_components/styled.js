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

    :hover{
        color: #76a088;
    }
`;

export const Tab = styled.a`
    font-size: 1.4rem;
    font-weight: 700;
    color: #909183;
    text-transform: uppercase;

    :hover{
        color: #737468;
    }
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

    :hover{
        color: #737468;
    }
`;

export const FormWrapper = styled.div`
   width: 70%;
   margin-left: auto;
   margin-right: auto;
   margin-top: 10px;
`;

export const Icon = styled.img`
    width: 150px;
    height: auto;
`;

export const License = styled.a`
    display: inline-block;
    width: 70%;
    margin-top: 25px;
    font-size: 1.5rem;
    text-align: left;
    color: #94c9ab;

    :hover{
        color: #76a088;
    }
`;

export const License2Wrapper = styled.div`
   margin-top: 29px;
`;

export const License2 = styled.a`
    display: inline-block;
    width: 100%;
    margin-top: 8px;
    font-size: 1.5rem;
    text-align: left;
    color: #94c9ab;

    :hover{
        color: #76a088;
    }
`;

export const PlantsHeading = styled.div`
    margin-top: 10px;
    display: flex;
    width: 90%;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
`;

export const PlantsQuontity = styled.p`
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #587866;

    span {
        color: #94c9ab;
    }
`;

export const PlantListViewWrapper = styled.div`
   display: flex;
   margin-left: auto;
   justify-content: space-between;
   margin-right: auto;
   width: 60%;
   margin-top: 15px;
   border-bottom: 1.3px solid #94c9ab;
   padding-bottom: 5px;
`;

export const PlantListViewImg = styled.img`
   width: 150px;
   height: 150px;
   border-radius: 50%;
   
`;

export const PlantListViewText = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   margin-left: 15px;

   h3 {
       color:  #94c9ab;
       font-size: 1.7rem;

   }

   p {
        color:  #909183;
        margin-top: 8px;
        font-size: 1.5rem;
        text-align: left;
   }
`;

export const PlantListViewDiv = styled.div`
   overflow: auto;
   height: 400px;

`;


export const WaterThePlant = styled.button`
  height: 40px;
  padding: 0;
  margin-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  background: #94c9ab;
  border: none;
  color: #fff;
  font-size:  1.4rem;
  text-transform: uppercase;
  font-weight: 700;
  padding-top: 6px;
  padding-bottom: 2px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: #76a088;
    color: #fff;
  }
`;

export const WateringWrapper = styled.div`
   margin-top: 40px;

`;


export const ImageAndText = styled.div`
   display: flex;

`;

export const AwsomeWrapper = styled.div`
   display: flex;
   align-self: center;
   height: 100%;
   margin-right: 28px;
   color: #d4f1f9;
   font-size: 5rem;

`;

export const DifferenceWrapper = styled.div`
   display: flex;
   align-self: center;
   height: 100%;
   margin-right: 28px;
   color: #d29596;
   font-size: 1.5rem;
   text-transform: uppercase;

`;

export const Reminder = styled.h3`
    font-size: 1.5rem;
    text-transform: uppercase;
    color: #d29596;
    font-weight: 400;
    margin-top: 25px;
`;

export const SinglePlantWrapper = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 30px;

`;


