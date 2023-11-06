import "./App.css";
import React, { useState } from "react";
function App() {
  const [today, setToday] = useState([
    { id: 1, do: "자바스크립트", it: "강의 복습" },
    { id: 2, do: "리액트", it: "강의 복습하기" },
    { id: 3, do: "JSX", it: "문법 독해" },
    { id: 4, do: "JS", it: "문법 다시보기" },
  ]);

  return (
    <div className="body">
      <div className="App-header">오늘 할일</div>
      <div className="input-box">
        <div>
          제목<input></input>
          내용<input></input>
        </div>

        <button>추가하기</button>
      </div>
      <br />
      <div className="todoList-box">
        <div className="List">오늘 할일들</div>
        <br />
        <div className="todoList-grid">
          {today.map(function (item) {
            return (
              // <div className="todoList-grid">
              <div className="todo">
                <div key={item.id} className="todo-title">
                  {item.do}
                </div>
                <br />
                <div className="todo-detail">{item.it}</div>
                <br />
                <button className="deletebtn">삭제하기</button>
                <button className="completebtn">완료!</button>
              </div>
              // </div>
            );
          })}
        </div>
        {/* <div className="todoList-grid">
          <div className="todo">
            <div className="todo-title">{today[0].do}</div>
            <br />
            <div className="todo-detail">{today[0].it}</div>
            <br />
            <button className="deletebtn">삭제하기</button>
            <button className="completebtn">완료!</button>
          </div>
        </div> */}
      </div>
      <br />
      <div className="complete-box">
        <div className="List">할일 완료!</div>
        <br />
        <div className="todoList-grid">
          <div className="todo">
            <div className="todo-title">리액트 공부하기</div>
            <br />
            <div className="todo-detail">리액트 기초를 공부해보자</div>
            <br />
            <button className="deletebtn">삭제하기</button>
            <button className="completebtn">완료!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
