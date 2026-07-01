function StateComponent6(props) {

    // 실행할 구문
    console.log(props);
    /*
        props = {
            str : "Before",
            setStr : () => {}
        };
    */

    // 버튼 클릭 시 실행할 이벤트 핸들러 함수
    const changeStr = () => {

        // > props 는 읽기 전용이라 값변경이 불가하다!! (read only)

        // props.str = "After";
        // > props 는 읽기 전용이라 값 변경이 불가하다!! (read only)
        // > 만에 하나 값 변경이 가능하더라도 변경된 값이 화면에 반영되지는 않을 것!!

        // 그래서 주로 State 형 변수를 전달값으로 넘기고 props 로 받았을 때
        // 값 변경 (수정) 이 필요하다면,
        // State 변수 생성 시 같이 만들어진 setter 함수도 전달값으로 같이 넘겨서 써주면 된다.
    
        // 메소드 속성을 호출할 경우에는?
        // 객체명.메소드명();
        props.setStr("After");
        // > 전달받은 setter 함수를 호출함으로써
        //   str 값을 간접적으로나마 변경 가능하도록 해준다!!
        //   (아무리 읽기 전용인 props 더라도)
    }; 

    // return 구문
    return (
        <div>
            <p>전달받은 str : { props.str }</p>
            <button onClick={ changeStr }>str 변경</button>
        </div>
    );
}

// 내보내기
export default StateComponent6;