import { useLocation } from "react-router-dom";

function TestComponent1() {

    // 실행할 구문
    // 2_1. URL 주소 상에 전달값이 노출되지 않는 경우
    // > navigate 함수를 통해
    //   {state : {여기}} 에 담겨온 데이터를 뽑아서 화면에 출력할 것!!
    // > 리액트에서 제공하는 location 객체를 이용!!
    //   (순수 자바스크입트에서 자루던 기존의 location 객체와는 다른 객체임!!)

    /*
        [ 표현법 ]

        // 우선 location 객체를 얻어내야만 한다.
        // > 마찬가지로 useLocation 이라는 리액트 내장 함수를 이용해서 얻어낸다!!

        // 당연히 import 먼저 해야함!!
        import { useLocation } from "react-router-dom";

        // 컴포넌트 함수 내부에서 location 객체 얻어내기
        let location = useLocation(); // {}
    */

    // location 객체 얻어내기
    let location = useLocation(); // {}

    console.log(location);
    /*
        location = {
            pathname : "/test1",
            state : {키 : 밸류, 키 : 밸류, ...}
        };

        - pathname : 현재 이 컴포넌트가 보여질 때의 url 주소
        - state : 요청 시 넘겼었던 값들
    */

    // console.log(location.state.userId)
    // console.log(location.state.userName)

    var {userId, userName} = location.state;
    /*
        구조분해할당식에 의해
        var userId = location.state.userId;
        var userName = location.state.userName
    */

    // return 구문
    return (
        <div>
            <h1>회원 정보 상세보기</h1>

            <h3>아이디 : { userId }</h3>
            <h3>이름 : { userName }</h3>
        </div>
    );
}

// 내보내기
export default TestComponent1;