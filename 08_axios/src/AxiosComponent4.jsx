import axios from "axios";
import { useEffect, useState } from "react";

function AxiosComponent4() {

    // 설명할 구문
    const [city, setCity] = useState("전국");
    const [dataList, setDataList] = useState([]);

    const serviceKey = "KWDm5Y8Ln%2F8smfC1iRl0iqF9v40STW5%2FKn3WpSVeuOmoYKpTlwupMMfV1AlKGcAOmyknzWXpkGknaK4ut9oLpw%3D%3D";

    const handleCity = e => {

        setCity(e.target.value);
    }

    const selectAir = e => {

        e.preventDefault();

        let url = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";
            url += "?ServiceKey=" + serviceKey;
            url += "&returnType=json";
            url += "&numOfRows=20";
            url += "&pageNo=1";
            url += "&sidoName=" + city;

        axios({
            url : url,
            method : "get"
        }).then((response) => {

            const items = response.data.response.body.items;

            const trArr = items.map((item, index) => {
                
                console.log(item);
                
                return (
                    <tr key={ index }>
                        <td>{ item.sidoName }</td>
                        <td>{ item.dataTime }</td>
                        <td>{ item.khaiValue }</td>
                        <td>{ item.pm10Value }</td>
                        <td>{ item.coValue }</td>
                        <td>{ item.no2Value }</td>
                        <td>{ item.so2Value }</td>
                        <td>{ item.o3Value }</td>
                    </tr>
                );
            });

            setDataList(trArr);
            
        }).catch();

    }
    // return 구문
    return(
        <div>
            <form>
                지역:
                <select value={ city } name="city" onChange={ handleCity }>
                    <option value="전국">전국</option>
                    <option value="서울">서울</option>
                    <option value="부산">부산</option>
                    <option value="대구">대구</option>
                    <option value="인천">인천</option>
                    <option value="광주">광주</option>
                    <option value="대전">대전</option>
                    <option value="울산">울산</option>
                    <option value="경기">경기</option>
                    <option value="강원">강원</option>
                    <option value="충북">충북</option>
                </select>
                <button type="submit" onClick={ selectAir }>대기오염 정보 확인</button>
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>측정소명</th>
                        <th>측정일시</th>
                        <th>통합대기환경수치</th>
                        <th>미세먼지농도</th>
                        <th>일산화탄소농도</th>
                        <th>이산화질소농도</th>
                        <th>아황산가스농도</th>
                        <th>오존농도</th>
                    </tr>
                </thead>
                <tbody>{ dataList }</tbody>
            </table>
        </div>
    );

}

export default AxiosComponent4;