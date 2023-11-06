import "./App.css";
import React, { useState } from "react";
function App() {
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
