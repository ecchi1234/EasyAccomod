import styled from "styled-components";

import { Link } from "react-router-dom";

import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaTrashAlt,
  FaEdit,
} from "react-icons/fa";

export const TableResponsive = styled.table`
  width: 100%;
  display: table;
  border-collapse: collapse;
  background-color: transparent;
`;

export const TableHeadingCell = styled.th`
  background-color: #f5f6ff;
  border: none;
  padding: 10px 10px 10px 0;
  padding-left: ${({ p }) => (p === "pl-2" ? "0.5rem !important" : "")};
  padding: ${({ p }) => (p === "p-0" ? "0 0 !important" : "")};
  text-align: left;
  &:first-child {
    color: #333;
    font-size: 18px;
    font-weight: 600;
  }
  &:last-child {
    padding-right: 5px;
  }

  @media screen and (max-width: 768px) {
    font-size: 15px;
    padding-left: 1rem;
  }
`;

export const TableRow = styled.tr`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const TableColumn = styled.td`
  border-top: none;
  border-bottom: 1px solid #f3f3f3;
  padding: 30px 20px 30px 0;
  vertical-align: middle;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  font-weight: 400;
  @media screen and (max-width: 768px) {
    padding-bottom: 15px;
    padding-top: 0;
    /* border-bottom-color: #fff; */
  }
`;

export const FavoriteItemImageContainer = styled(TableColumn)`
  width: 125px;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const LinkContainer = styled(Link)`
  text-decoration: none;
`;

export const FavoriteHouseImage = styled.img`
  width: 100%;
  border-radius: 5px;
  max-width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: middle;
  border-style: none;
`;

export const FavoriteHouseInformation = styled.div``;

export const FavoriteHouseName = styled.h2`
  border: none;
  font-size: 16px;
  color: #444;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: 500;
  margin: 0 0 9px 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  line-height: 1.1;
`;

export const FavoriteHouseLocation = styled.p`
  margin-bottom: 16px;
  color: #333;
  margin: 0 0 1rem;
`;

export const RatingBox = styled.ul`
  list-style: none;
  margin-top: 0.4rem;
  padding: 0px;
  text-align: left !important;
  margin-bottom: 0 !important;
`;

export const RatingItem = styled.li`
  text-align: center;
  display: inline-block;
  margin-bottom: 0 !important;
`;

export const FullStarRatingIcon = styled(FaStar)`
  color: #ffc107 !important;
`;

export const HalfStarRatingIcon = styled(FaStarHalfAlt)`
  color: #ffc107 !important;
`;

export const EmptyStarRatingIcon = styled(FaRegStar)`
  color: #ffc107 !important;
`;

export const RatingItemNumberReview = styled(RatingItem)`
  margin-left: 1rem !important;
  color: #666;

  @media screen and (max-width: 1199px) {
    margin-left: 0 !important;
  }

  @media screen and (max-width: 768px) {
    margin-left: 1rem !important;
  }
`;

export const ActionColumn = styled(TableColumn)`
  padding-right: 0 !important;
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

export const DeleteButton = styled.button`
  background-color: #fff;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
export const DeleteIcon = styled(FaTrashAlt)`
  color: #f50057;
`;
export const EditIcon = styled(FaEdit)`
  margin-left: 0.5rem;
  color: #008000;
`;
