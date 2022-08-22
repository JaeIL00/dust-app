import styled from "styled-components";
import { Link } from 'react-router-dom'

export const TapContainer = styled.div`
  width: 100%;
  height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 0;

  border-top: .4px solid #333;
  text-align: center;
`

export const Button = styled(Link)`
  flex-grow: 1;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  color: #222;
  text-decoration: none;

  &:first-child {
    border-right: .2px solid rgba(0, 0, 0, .4);
  }
  &:last-child {
    border-left: .2px solid rgba(0, 0, 0, .4);
  }
`

export const text = styled.span`
  margin-top: 4px;
`