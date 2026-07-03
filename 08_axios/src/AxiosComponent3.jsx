import { useState, useEffect } from "react";

import axios from "axios";

function AxiosComponent3() {

    // 실행할 구문
    // 응답데이터를 감싼 tr 요소들을 담아 둘 배열 형식의 State 변수 선언
    const [dataList, setDataList] = useState([]);

    // 공공데이터포탈 인증키는 미리 변구로 빼두기!!
    const serviceKey = "KWDm5Y8Ln/8smfC1iRl0iqF9v40STW5/Kn3WpSVeuOmoYKpTlwupMMfV1AlKGcAOmyknzWXpkGknaK4ut9oLpw==";
    // > 내가 직접 쿼리스트링을 구성할 때에는 Encoding 키,
    //   axios 의 params 로 넘길 경우에는 Decoding 키를 넣는다!!
    //   (내부적으로 axios 가 쿼리스트링을 만들기 때문)

    // 이 컴포넌트가 로딩되었을 때 최초로 단 한번만 실행할 구문 (useEffect) 안에서 axios 요청
    useEffect(() => {
        
        // url 주소 셋팅
        /*
        let url = "http://apis.data.go.kr/6260000/FoodService/getFoodKr";
            url += "?ServiceKey=" + serviceKey;
            url += "&pageNo=1";
            url += "&numOfRows=10";
            url += "&resultType=json";
        */

        let url = "http://apis.data.go.kr/6260000/FoodService/getFoodKr";

        // console.log(url);
        
        // axios 메소드 호출 - 심화 문법 (동기식)
        const getData = async () => {

            try {

                const response = await axios({
                    url : url,
                    method : "get",
                    params : {
                        ServiceKey : serviceKey,
                        pageNo : 1,
                        numOfRows : 10,
                        resultType : "json"
                    }
                });

                // console.log(response.data.getFoodKr.item);

                const items = response.data.getFoodKr.item;

                const trArr = items.map((item, index) => {

                    return (
                        <tr key={ index }>
                            <td>{ item.MAIN_TITLE }</td>
                            <td>{ item.ADDR1 }</td>
                            <td>{ item.CNTCT_TEL }</td>
                            <td>{ item.ITEMCNTNTS }</td>
                            <td>
                                <img src={ item.MAIN_IMG_THUMB } width="150" />
                            </td>
                        </tr>
                    );
                });

                setDataList(trArr);

            } catch(error) {

                console.log("부산 맛집 조회용 ajax 통신 실패!");
            }
        };

        getData();

        // axios 메소드 호출 - 기존의 문법 (비동기식)
        /*
        axios({
            url : url,
            method : "get",
            params : {
                serviceKey : serviceKey,
                pageNo : 1,
                numOfRows : 10,
                resultType : "json"
            }
        }).then((response) => {

            // response 에는 응답 정보가 통으로 담겨옴!!
            // > 응답데이터가 잘 넘어오는지 확인 (response.data)
            // console.log(response.data);
            // > {getFoodKr : {}}

            // console.log(response.data.getFoodKr);
            // > {header {...}, item: Array(10), numOfRows: 10, pageNo: 1, totalCount: 437}
            
            // console.log(response.data.getFoodKr.item);
            // > [{}, {}, {}, {}, ...]
            
            // 별도의 변수로 빼두기
            const items = response.data.getFoodKr.item;

            // 이 데이터들을 tr 요소로 바꿔서 새로운 배열에 차곡차곡 담기
            const trArr = items.map((item, index) => {

                console.log(item);  // index 번째 데이터
                // 가게명 : MAIN_TITLE
                // 주소 : ADDR1
                // 전화번호 : CNTCT_TEL
                // 설명 : ITEMCNTNTS
                // 대표이미지 : MAIN_IMG_THUMB

                return (
                    <tr key={ index }>
                        <td>{ item.MAIN_TITLE }</td>
                        <td>{ item.ADDR1 }</td>
                        <td>{ item.CNTCT_TEL }</td>
                        <td>{ item.ITEMCNTNTS }</td>
                        <td>
                            <img src={ item.MAIN_IMG_THUMB } width="150" />
                        </td>
                    </tr>
                );
            });

            // trArr 을 state 형 변수로 변경 (setter 호출)
            setDataList(trArr);

        }).catch(() => {

            console.log("부산의 맛진 조회용")
        });
        */

    }, []);

    // return 구문
    return (
        <div>
            <h4>부산의 맛집</h4>

            <table border="1">
                <thead>
                    <tr>
                        <th width="150">가게명</th>
                        <th width="260">주소</th>
                        <th width="120">전화번호</th>
                        <th width="310">설명</th>
                        <th>대표이미지</th>
                    </tr>
                </thead>
                <tbody>{ dataList }</tbody>
            </table>
        </div>
    );
}

// 내보내기
export default AxiosComponent3;