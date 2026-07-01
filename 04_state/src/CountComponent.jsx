import { useState } from "react";

import "./CountComponent.css";

function CountComponent() {

    // 실행할 구문
    // 상품의 수량을 나타내는 State 형태의 변수 선언
    const [amount, setAmount] = useState(0);

    // - 버튼 클릭 시 실행할 이벤트 핸들러 함수
    const minusAmount = () => {

        if(amount > 0) {
            
            setAmount(amount - 1);
        } 
    };

    // + 버튼 클릭 시 실행할 이벤트 핸들러 함수
    const plusAmount = () => {
        
        setAmount(amount + 1);
    };

    // return 구문
    return(
        <div>
            <button onClick={ minusAmount }  className="countBtn">-</button>
            <input type="text" id="amount" value={ amount } readOnly />
            {/* 리액트에서는 readonly 속성 또한 carmel case 를 적용해야함!! */}
            <button onClick={ plusAmount } className="countBtn">+</button>
        </div>
    );
}

// 내보내기
export default CountComponent;