import { useState } from "react";
// > State 형 변수를 만들 수 있는 함수를 가져다 쓰겠다고 import

function StateComponent1() {

    // 실행할 구문
    // State 사용 전
    // let count = 0;
    // > count 값을 담을 변수를 선언 - 일반 변수

    // State 사용 후 (맛보기)
    let [count, setCount] = useState(0);
    // > count 값을 담을 변수를 선언 - state 형 변수

    /*
        useState 함수는 배열을 하나 리턴해주는 함수임!!
        리턴된 배열의 0 번 인덱스에는 호출 시 전달한 인자값이 담겨오고,
                      1번 인덱스에는 setter 함수가 들어가 있음!!
                      (앞에서 정의한 변수에 대한 setter 함수)
       
        내부적으로
                                useState(0);
        let [count, setCount] = [0, (value) => { count = value; }];
        
        구조분해할당 문법에 의해
        let count = 0; // 실제 값을 담는 부분
        let setCount = () => {}; // 그 값을 변경해주는 부분 (setter)
    */

    const plusCount = () => {

        // console.log("잘 클릭되나?");

        // State 사용 전
        // count++;
        // console.log(count);
        // > 일반 변수값을 {} 안에 적어서 화면에 출력하고자 할 때
        //   변수값 자체는 잘 증가가 되나 (콘솔에 제대로 찍힘), 정작 화면에는 출력이 되지 않음!!
        // > 왜? 단순 일반 변수의 경우 값이 매번 변동된다고 해서
        //       리액트 화면 상에 매번 다시 변동된 값이 반영되서 출력되지 않음!!
        //       이미 아래의 return 구문 안쪽에서
        //       최초로 셋팅된 변수값이 화면에 출력되었기 때문!!
        // > 그렇다고 해서 DOM 요소를 직접 건들이는 방향으로 코드를 짜면
        //   물론 화면 상 반영되서 출력이 잘 되긴 하지만 (.value, .innerHTML/Text 등)
        //   리액트에서는 DOM 요소를 직접 건들이는 방향을 권장하지 않음!!
        // > 이 때 필요한 개념이 State 임!!

        // State 사용 후
        // count++;
        // count = count + 1;
        // > 변경시킬 값을 직접 대입하지 않음!!

        setCount(count + 1);
        // > 함께 만들어진 setter 함수를 이용해서 값 변경!!
        // > setter 함수는 해당 변수값을 변경해줄 뿐만 아니라
        //   변경된 값으로 화면에 다시 출력해주는 구문까지 포함

        console.log(count);
        // > setter 함수를 이용해서 값을 변경하면 (제대로된 사용법)
        //   오히려 1씩 밀려서 출력된다!!
        // > 호출 자체는 setter 가 먼저 호출되나,
        //   함수 실행 완료는 console.log 가 먼저 완료되기 때문!!

        // * 화면에 매번 변수의 변동값을 출력하고 싶다면
        //   일반 변수는 불가하고, DOM 요소를 최대한 직접 안던들이면서
        //   State 형 변수를 반드시 써야한다!!
    };

    // return 구문
    return (
        <div>
            <p>총 { count }번 클릭했습니다.</p>
            <button onClick={ plusCount }>클릭</button>
        </div>
    );
}

// 내보내기
export default StateComponent1;