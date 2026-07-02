import { useParams } from "react-router-dom";

function TestComponent2() {

    // 실행할 구문
    // 2_2. url 주소 상에 전달값이 Path Variable 형식으로 노출될 경우
    // > 리액트에서 제공하는 useParams 라는 함수를 이용한다.

    /*
        [ 표현법 ]

        // 당연히 import 후 사용해야함!!
        import { useParams } from "react-router-dom";

        // 컴포넌트 함수 내부에서 useParams 를 호출해서 값을 뽑는다.
        변수명 = useParams().변수명;

        - useParams().변수명은
          Route 태그에서 path 속성에 기술했던 :변수명을 뜻함!!
    */

    const noticeNo = useParams().noticeNo;

    // console.log(noticeNo);

    // 이 전달받은 noticeNo 을 가지고 ajax 요청 하기!! (공지사항 한 건 조회)

    // return 구문
    return (
        <div>
            <h1>공지사항 상세조회</h1>

            <h3>조회할 공지사항 번호 : { noticeNo }</h3>
        </div>
    );
}

// 내보내기
export default TestComponent2;