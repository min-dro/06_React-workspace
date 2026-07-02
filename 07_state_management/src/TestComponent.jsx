import useCountStore from "./countStore";

function TestComponent() {

    // 실행할 구문
    // const {count, increment, decrement, reset} = useCountStore();
    const count = useCountStore().count;

    // return 구문
    return (
        <div>
            count가 잘 공유 되나? : { count }
        </div>
    );
}

// 내보내기
export default TestComponent;