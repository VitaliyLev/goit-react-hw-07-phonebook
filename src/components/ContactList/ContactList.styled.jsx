import styled from 'styled-components';

export const List = styled.ol`
  height: 200px;
  overflow-x: auto;
`;
export const Item = styled.li`
  :not(:last-child) {
    margin-bottom: 10px;
  }

  div {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
  }
`;

export const Button = styled.button`
  transition: all 200ms linear 0s;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  font-size: 15px;
  :not(:last-child) {
    margin-right: 10px;
  }
  :hover {
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    background: rgb(169, 219, 216);
  }
`;
