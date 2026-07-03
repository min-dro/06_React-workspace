import "./StateComponent2.css";

import { useState } from "react";
// > react 라이브러리로 부터 useState 라는 함수를 가져다 쓰겠다.

function StateComponent2() {

    // 실행할 구문
    /*
        * State 형태의 변수를 선언하기

        - 리액트에서 제공하는 useState 하는 내장함수를 이용해서
          "구조분해할당" 문법 형식으로 변수 선언 및 setter 함수를 선언해서 쓴다!!

        [ 표현법 ]
        // 함수 상단에 import 구문을 이용해서 useState 함수를 쓰겠다고 선언
        import { useState } from "react";

        // 컴포넌트 함수 내부에서
        // 구조분해 할당 문법 형식으로 변수 및 setter 함수 선언
        const [변수명, set변수명] = useState(변수에대입할초기값)

        - 내부적으로
                                   useState(변수에대입할초기값);
        const [변수명, set변수명] = [변수에대입할초기값, 해당변수에대한setter함수];

        - 즉,
        const 변수명 = 변수에대입할초기값;
        const set변수명 = 해당변수에대한setter함수;

        - 참고로 set변수명은 carmel case 를 적용한다!!
    */
    const [color, setColor] = useState("Red");
    /*
        내부적으로
        const color = "Red";
        const setColor = () => {}; // color 변수에 대한 setter 함수
    */

    // 이 시점에서 State 형 변수가 제대로 만들어졌나 먼저 출력
    console.log(color);
    console.log(setColor);

    console.log("-----------");

    // State 변수에 직접 대입구문을 이용해본다면?
    // color = "Orange";
    // > 직접 대입이 가능하고, 오히려 한번만 출력됨!! (무한반복이 돌지 않음)
    // > 다만 우리는 위에서 const 로 선언했기 때문에 재할당이 안되는 것일 뿐!!

    // 이 시점에서 setter 함수를 이용해서 변수 값을 변경
    // setColor("Orange");
    // > 무한반복이 돌다가 오류가 터짐!! (오히려 이게 제대로된 사용법)

    // console.log(color);

    /*
        * State 형 변수는 값을 변경할 때 setter 함수를 통해 변경한다!!
        - 그래서 일부러 직접 대입을 최대한 문법적으로 막아보려고 State 형 변수는 const 형태로 선언함

        * 그러면 무한반복이 도는 이유? 오류가 가는 이유?
        - State 변수값이 setter 함수에 의해 변경될 때 마다
          내부적으로 setter 함수는 "값 변경 + 변경된 값을 화면에 다시 출력까지" 해주는 역할이기 때문
          (변경된 값을 화면에 다시 출력해주겠다, "재렌더링")
        - 재렌더링 과정에서 이 컴포넌트 함수가 계속 호출되기 때문에 무한반복됨!!
          (컴포넌트가 재렌더링 된다 == 이 컴포넌트 함수를 다시 호출하겠다)
        - 오히려 직접 대입했던 구문은
          대입된 값이 변수에는 반영되겠지만, 대입만 하고 끝이기 때문에
          다시 한번 반영해서 렌더링까지는 안가기 때문에 한번만 딱 실행되고 끝났던 것!!

        - 그래서 setter 를 이용한 값 변경이 정석적인 사용법임!!
          단, setter 함수를 호출할 경우에는 컴포넌트 함수 내부에서 곧바로 실행 X
          주로 "이벤트가 발생했을 경우 딱 한번!! 만 실행되는 이벤트 핸들러 함수" 내부에서 실행 O
    */

    // h3 요소를 클릭했을 때 실행할 함수
    const changeColor = () => {

        // h3 요소의 className 속성값을 "Orange" 로 바꾸기
        // 방법1)
        // e.target.className = "Orange";
        // > DOM 요소에 직접 접근 (e.target 을 이용해서) 해서 속성값을 대놓고 대입구문을 통해 변경

        // > 리액트에서는 DOM 관련 구문을 직접 조작하는 것을 선호하지 않음!!
        //   (물론 코드가 문제 없이 동작하긴 함!!)
        //   DOM <---> Virtual DOM (리액트에서 제공) <---> 브라우저
        // > Virtual DOM 을 통해 요소가 변경되야 하는데 DOM 을 곧바로 요소를 변경해버리는 꼴이기 때문

        // 방법2) State 형 변수를 이용하는 방법
        // 1. State 형식으로 변수를 선언 - 컴포넌트 함수 내에서 선언
        //    (언제 호출될지 모르는 이벤트 핸들러 함수 내부가 아닌 컴포넌트 함수 바로 내부에서 선언)
        // 2. 이벤트 핸들러 함수 내부에서 setter 를 통해 값 변경
        //    (무한 재렌더링을 방지하기 위해 이벤트 핸들러 함수 내부에서 setter 호출)
        setColor("Orange");

        console.log(color);
    };

    // return 구문
    return (
        <div>
            <h3 className={ color } onClick={ changeColor }>잘 나오나?</h3>
            {/*
                - State 형 변수는 출력값 (.innerHTML/Text, .value 등) 에도 많이 쓰이지만,
                  위와 같이 className, style 등의 속성값에도 많이 쓰인다!!
            */}
        </div>
    );
}

// 내보내기
export default StateComponent2;