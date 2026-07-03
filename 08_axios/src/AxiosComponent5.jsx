import { useState, useEffect } from "react";

import axios from "axios";

function AxiosComponent5() {

    // 실행할 구문
    // 조회된 데이터를 tr 요소로 감싸서 담아둘 배열 형식의 State 변수 셋팅
    const [dataList, setDataList] = useState([]);

    // 이 컴포넌트가 최초로 단 한번 로딩 후 딱 한번만 실행할 구문 (useEffect)
    useEffect(() => {

        // axios 요청을 보내거 회원 목록 조회해오기
        // > 기존 수업 때 만든 MyWeb_Project 로 부터
        //   회원 목록을 조회해와서 응답데이터로 뿌려줄 것!!

        // 요청할 url 주소
        let url = "http://localhost:8006/myweb/member/list";

        // 심화문법으로 동기식 방식
        const getData = async () => {

            try {

                const response = await axios({
                    url : url, // 객체확장표현식 가능
                    method : "get" 
                });

                // console.log(response.data)

                const items = response.data;

                const trArr = items.map((item, index) => {
                    
                    return (
                        <tr key={ index }>
                            <td>{ item.userId }</td>
                            <td>{ item.userName }</td>
                            <td>{ item.phone }</td>
                            <td>{ item.email }</td>
                            <td>{ item.address }</td>
                            <td>{ item.enrollDate }</td>
                            <td>{ (item.status == "N") ? "탈퇴" : "" }</td>
                        </tr>
                    );
                });

                setDataList(trArr);

            } catch(error) {

                console.log("회원 목록 조회용 ajax 통신 실패!");
            }
        };

        getData();

        // 기존의 비동기식 방식
        /*
        axios({
            url : url,
            method : "get"
        }).then((response) => {
            
            // response 에는 응답 정보가, response.data 에 응답 데이터가 담김
            // console.log(response.data);

            // 응답데이터를 별도의 변수로 옮겨담기
            const items = response.data;

            // 데이터들을 tr 요소로 감싸서 새로운 배열에 차곡차곡 담기
            const trArr = items.map((item, index) => {

                return (
                    <tr key={ index }>
                        <td>{ item.userId }</td>
                        <td>{ item.userName }</td>
                        <td>{ item.phone }</td>
                        <td>{ item.email }</td>
                        <td>{ item.address }</td>
                        <td>{ item.enrollDate }</td>
                        <td>{ (item.status == "N") ? "탈퇴" : "" }</td>
                    </tr>
                );
            });

            // State 형 변수에 대입 (setter)
            setDataList(trArr);

        }).catch(() => {

            console.log("회원 목록 조회용 ajax 통신 실패!");
        });
        */
       
    }, []);

    // return 구문
    return (
        <div>
            <h4>회원 목록 조회</h4>

            <table border="1">
                <thead>
                    <tr>
                        <th>아이디</th>
                        <th>회원 이름</th>
                        <th>전화번호</th>
                        <th>이메일 주소</th>
                        <th>주소</th>
                        <th>회원가입일</th>
                        <th>탈퇴 여부</th>
                    </tr>
                </thead>
                <tbody>{ dataList }</tbody>
            </table>
        </div>
    );
}

// 내보내기
export default AxiosComponent5;