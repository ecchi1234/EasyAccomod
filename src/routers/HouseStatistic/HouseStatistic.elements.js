import styled from "styled-components";

import {FaHeart, FaEye} from "react-icons/fa";

export const StatisticValue = styled.h4`

  color: #666;
  text-align: center;
`;

export const EachStatisticContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-right: 0.8rem;
@media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
}
`;

export const FavoriteCount = styled(FaHeart)`
color: #ff385c;
margin-right: 0.5rem;
`;

export const WatchCount = styled(FaEye)`
color: #18ba60;
margin-right: 0.5rem;
`;

export const StatisticBox = styled.div`
display: flex;
flex-wrap: wrap;

`;
