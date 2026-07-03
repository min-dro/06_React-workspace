// 클래스형 컴포넌트 만들기
// > 클래스명이 곧 컴포넌트의 이름리 됨!!
// > 반드시 Component 라는 클래스 (리액트 라이브러리에서 제공) 를 상속 (extends) 받아서 써야 한다.
//   (클래스형 컴포넌트를 만들기 위해 리액트에서 제공해주는 클래스)
import { Component } from "react";
// > react 라이브러리로 부터 Component 라는 클래스를 가져다 쓰겠다.

class MyComponent4 extends Component {

    // 생성자함수 정의 - 패스

    // 메소드속성 정의 : render 라는 메소드 속성을 정의한다.
    render() {

        // 실행할 구문
        // 마찬가지로 인라인 스타일 방식으로 적용할 스타일 객체 생성
        const styleObj = {
            color : "red",
            backgroundColor : "yellow",
            fontWeight: "lighter",
            textDecoration : "line-through"
        }

        // 클래스형 컴포넌트는 내부적으로 props 객체를 "속성으로써" 가지고 있다!!
        console.log(this.props);
        // > 전달값들이 하나의 객체형식으로 잘 넘어와짐!!

        /*
        this.props.boardTitle = "변경된 제목입니다.";
        this.props.boardContent = "변경된 내용이 어쩌고 저쩌고..";
        */
        // > 마찬가지로 props 는 읽기 전용임!!

        // 주로 구문을 줄이기 위해 각각의 속성값을 변수로 대입 후 출력해서 쓴다!!
        // let title = this.props.boardTitle;
        // let content = this.props.boardContent;

        let {boardTitle, boardContent} = this.props;
        // > 구조분해할당 적용 또한 가능

        // return 구문 - JSX 형식으로 화면 구성
        return (
            <div style={ styleObj }>
                <h2>클래스형 컴포넌트 입니다!!</h2>
                <br/>
                <h3>제목 : { boardTitle }</h3>
                <h4>내용 : { boardContent }</h4>
            </div>
        );
    }
}

// 컴포넌트를 내보내겠다.
export default MyComponent4;