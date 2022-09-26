import React, { useCallback, useEffect, useState } from "react";
import Header from "../global/Header";
import { Progress } from "@nextui-org/react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Loader } from "../global/Loader";

const TodoDetail = () => {
  const [width, setWidth] = useState(0);
  const [todo, setTodo] = useState(false);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const id = useParams();

  const handleFinish = () => {
    console.log(id);
    axios.patch(`${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}user/product`, {
      userId: localStorage.getItem("userid"),
      productId: id.productid,
      sessionId: id.sessionid,
      todoId: id.todoid,
    });
  };

  const handleScroll = useCallback(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop === 0) {
      setWidth(0);
      return;
    }
    const windowHeight = scrollHeight - clientHeight;
    const currentPercent = scrollTop / windowHeight;
    setWidth(currentPercent * 100);
  }, []);

  const handleAnswer = () => {
    navigate(
      `/todo/${id.todoid}/${id.sessionid}/${id.productid}/${data.title}/answer`
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    const fetch = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_TODO_MALL_API_ENDPOINT}products/todo?id=${id.todoid}`
      );
      setData(response.data);
      setLoading(false);
    };
    fetch();
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [handleScroll, width]);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Header title={`${data.title}`} />
      <Progress
        squared
        color="primary"
        animated={false}
        size="xs"
        value={width}
      />
      <TodoDetailBody>
        {/* DANGER HTML */}
        <img style={{ width: "95%" }} src="/images/temp_detail_page.png" />
        <img style={{ width: "95%" }} src="/images/temp_detail_page.png" />

        <TodoDetailAnswer>
          <TodoDetailText>
            지금까지 과정을 잘 따랐는지 알고싶다면?
          </TodoDetailText>
          <TodoDetailButton onClick={handleAnswer}>
            모범 예시 보러가기
          </TodoDetailButton>
        </TodoDetailAnswer>

        <TodoDetailTask>
          <TodoDetailTaskTitle>태스크 완료하기</TodoDetailTaskTitle>
          <TodoDetailTaskSubtitle>
            아래 활동을 완료했다면 눌러서 수행하세요
          </TodoDetailTaskSubtitle>
        </TodoDetailTask>
        <TodoDetailTaskBox>
          {!todo ? (
            <TodoDetailTaskBoxToggleOff
              onClick={() => {
                setTodo(!todo);
              }}
            />
          ) : (
            <TodoDetailTaskBoxToggleOn
              onClick={() => {
                setTodo(!todo);
              }}
            >
              <img src="/images/purple_tick.svg" />
            </TodoDetailTaskBoxToggleOn>
          )}
          <TodoDetailTaskBoxTitle>{data.taskTitle}</TodoDetailTaskBoxTitle>
        </TodoDetailTaskBox>

        <TodoDetailFinishButton done={todo} onClick={handleFinish}>
          투두 완료하기
        </TodoDetailFinishButton>
      </TodoDetailBody>
    </>
  );
};

const TodoDetailBody = styled.div`
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TodoDetailAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px 0;
  gap: 10px;
`;

const TodoDetailText = styled.p`
  /* font-family: "PretendardRegular"; */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  text-align: center;
  color: #a495ff;
`;

const TodoDetailButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 30px;
  width: 178px;
  height: 44px;
  border: 1px solid #6b47fd;
  border-radius: 20px;
  background-color: #fbfbfb;
  /* font-family: "PretendardRegular"; */
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #6b47fd;
`;

const TodoDetailTask = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0 25px;
  gap: 20px;
`;

const TodoDetailTaskTitle = styled.p`
  /* font-family: "PretendardSemiBold"; */
  font-style: normal;
  font-weight: 1000;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;

const TodoDetailTaskSubtitle = styled.p`
  /* font-family: "PretendardRegular"; */
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
  margin-bottom: 20px;
`;

const TodoDetailTaskBox = styled.div`
  width: 90vw;
  height: 88px;
  background: #f7f7f7;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
`;

const TodoDetailTaskBoxToggleOff = styled.div`
  width: 17px;
  height: 17px;
  background: #ebebeb;
  border-radius: 4px;
  position: absolute;
  left: 20px;
  bottom: 37px;
`;

const TodoDetailTaskBoxToggleOn = styled.div`
  width: 17px;
  height: 17px;
  background: #e1dcfe;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 20px;
  bottom: 37px;
`;

const TodoDetailTaskBoxTitle = styled.p`
  width: 100%;
  /* font-family: "PretendardMedium"; */
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 27px;
  color: #000000;
  text-align: center;
`;

const TodoDetailFinishButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 90vw;
  height: 52px;
  margin: 30px 0;
  background: ${(props) => (props.done ? "#6b47fd" : "#EDEDED")};
  border-radius: 20px;
  /* font-family: "PretendardRegular"; */
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => (props.done ? "white" : "#929292")};
`;

export default TodoDetail;
