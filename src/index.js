// 假设main.js是我们的入口文件
console.log("load main js start webpack-dev-server testOK");

// 这俩个导入 接受成员名称必须这么写
import React from "react"; // 创建组建、虚拟dom 生命周期
import ReactDom from "react-dom"; // 把创建好的 组件和虚拟dom放在页面展示
import styles from "./index.css";

// // 参数1:元素的类型
// // 参数2:对象或null
// // 参数3:子节点
// // 参数n:其他节点
// const myh1 = React.createElement(
//   "h1",
//   { style: { color: "red" }, id: "myh1" },
//   "React创建的h1"
// );

// ReactDom.render(myh1, document.getElementById("app"));

class Square extends React.Component {
  render() {
    return <button className="square">{}</button>;
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
