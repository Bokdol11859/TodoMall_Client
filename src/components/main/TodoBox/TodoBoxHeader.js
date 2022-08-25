import React from "react";
import styled from "styled-components";

const TodoBoxHeader = () => {
  return (
    <>
      <TodoBoxHeaderContainer>
        <TodoBoxHeaderName>
          <span>솔빈</span>님의 도전
        </TodoBoxHeaderName>
        <TodoBoxHeaderTry>0개 도전 중</TodoBoxHeaderTry>
      </TodoBoxHeaderContainer>
      <TodoBoxDivider />
    </>
  );
};

const TodoBoxHeaderContainer = styled.div`
  height: 90px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  margin-top: 20px;
`;

const TodoBoxHeaderName = styled.p`
  font-family: "PretendardRegular";
  font-style: normal;
  font-size: 20px;
  color: #000000;
  span {
    font-family: "PretendardMedium";
    font-weight: 1000;
  }
`;

const TodoBoxHeaderTry = styled.p`
  font-family: "PretendardRegular";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: #707070;
`;

const TodoBoxDivider = styled.hr`
  background-color: #f1f3f5;
  height: 2px;
  opacity: 30%;
`;

export default TodoBoxHeader;
