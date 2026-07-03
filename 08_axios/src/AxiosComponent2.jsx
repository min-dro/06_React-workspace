import axios from "axios";

import { useState, useEffect } from "react";

function AxiosComponent2() {

    // 실행할 구문
    // 응답데이터를 tr 요소로 감싼 배열을 담을 State 형 변수
    const [dataList, setDataList] = useState([]);

    // 무한반복을 방지하기 위해 useEffect 훅으로 axios 요청 구문 감싸기
    useEffect(() => {
        
        // axios 로 요청
        // axios 심화 구문 - 동기식 방식 (화면이 깜빡거린다 X) 으로 요청 후 응답데이터 받기
        // > 화면이 안깜빡거리면서
        //   요청 후 응답 처리가 다 되면 그 이후의 코드가 마저 실행되는 꼴
        // > axios 를 동기식으로 처리하는 이유는
        //   React 특성 상 화면이 깜빡거리지 않으면서도
        //   한 컴포넌트 내부에서 axios 요청을 여러번 해야할 경우
        //   순차적으로 첫번째 요청 -> 응답 -> 두번째 요청 -> 응답 -> 세번째 요청 -> 응답 -> ..
        //   하는 구조를 만들어내기 위해서임!
        /*
            [ 표현법 ]

            // - asynk, await 키워드가 필요하다!!
            //   async : 이 함수 내부에서 비동기 요청을 동기식으로 처리하겠다라는 선언
            //   await : 이 요청의 응답이 돌아올 때 까지 기다린 후에 다음 줄의 코드를 실행하겠다.
            // - try ~ catch 구문 안쪽에서 작성한다.

            const 함수명 = async () => {
                
                try {

                    // axios 함수 단독 호출로 그냥 요청을 보내봄
                    // > 요청이 성공할 수도 있고, 실패할 수도 있음!! (즉, 예외가 발생될법한 구문)
                    const response = await axios({
                        url : "어디로",
                        method : "어떻게",
                        data/params : {무엇을}
                    });
                    // > axios 함수는 응답 정보를 리턴해준다!!

                    // response 에는 응답정보가, response.data 에는 응답데이터가 담겨져 있을 것!!
                    // > 이 시점에서 후처리 구문 작성!! (요청 성공 시 실행할 구문)

                } catch(error) {
                
                    // 매개변수 error 에는 오류에 대한 정보가 담겨옴
                    // > axios 요청 실패 시 실행할 구문 작성!!
                }
            };

            함수명(); // 함수 유출
        */

        const getData = async () => {

            try {

                const response = await axios({
                    url : "https://my-json-server.typicode.com/typicode/demo/comments",
                    method : "get"
                });

                // console.log(response.data);

                const items = response.data;

                const trArr = items.map((item, index) => {

                    return (
                        <tr key={ index }>
                            <td>{ item.id }</td>
                            <td>{ item.body }</td>
                            <td>{ item.postId }</td>
                        </tr>
                    );
                });

                setDataList(trArr);

            } catch(error) {

                console.log("ajax 통신 실패! : ");
            }
        };

        getData();

        // axios 기본 구문 - 비동기식 방식으로 요청 후 응답데이터 받기
        // > 요청 후 응답 처리기 다 되기 전에 그 이후의 코드가 마저 실행되는 꼴
        // > axios 를 비동기식으로 처리하면
        //   한 컴포넌트 내부에서 axios 요청을 여러번 해야할 경우
        //   첫번째 요청 -> 두번째 요청 -> 응답1 -> 응답2 -> 세번째 요청 -> 응답3 -> ...
        //   순차적으로 요청을 보내더라도 응답이 돌아오는 속도 차이 등으로 순서가 뒤죽박죽 섞인다!!
        /*
        axios({
            url : "https://my-json-server.typicode.com/typicode/demo/comments",
            method : "get"
        }).then((response) => {

            // console.log(response.data); // [{}, {}]

            // 이 조회된 데이터들을 tr 요소로 재가공해서 배열에 차곡차곡 담기
            const trArr = response.data.map((item, index) => {
               
                return(
                    <tr key={ index }>
                        <td>{ item.id }</td>
                        <td>{ item.body }</td>
                        <td>{ item.postId }</td>
                    </tr>
                );
            });

            setDataList(trArr);
            // > setter 함수를 단 한번만 실행될 수 있도록
            //   axios 요청 구문을 useEffect 훅으로 감싸준다!!

        }).catch(() => {

            console.log("ajax 통신 실패");
        });
        */
       
    }, []);

    // return 구문
    return (
        <div>
            <h4>JSON 샘플 무려 데이터 2</h4>

            <table border="1">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>body</th>
                        <th>postId</th>
                    </tr>
                </thead>
                <tbody>
                    { dataList }
                </tbody>
            </table>
        </div>
    );
}

// 내보내기
export default AxiosComponent2;