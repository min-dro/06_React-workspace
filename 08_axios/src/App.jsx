import './App.css'

import AxiosComponent1 from "./AxiosComponent1";
import AxiosComponent2 from "./AxiosComponent2";
import AxiosComponent3 from "./AxiosComponent3";
import AxiosComponent4 from "./AxiosComponent4";
import AxiosComponent5 from "./AxiosComponent5";

function App() {
  
  // 실행할 구문

  // return 구문
  return (
    <div>
      <h1>Axios</h1>

      <p>
        - Ajax 기능을 구현할 수 있는 자바스크립트 라이브러리 <br/>

        - 비동기식 요청 구문을 간략화 해준다!!

        - 기존에 jQuery 에서 제공하던 $.ajax() 와 문법이 유사해서 익히기 쉽고,
          라이브러리 자체도 jQuery 에 비해 훨씬 가벼움!! <br/>

        <br/>

        * Axios 연동하기 <br/>
        1. axios 를 연동하고자 하는 프로젝트 폴더로 이동 (cd 명령어) <br/>
        2. npm install axios 명령문을 통해 axios 라이브러리를 설치
      </p>

      <br/>
      <hr/>

      <h3>1. 간단한 형식의 JSON 샘플 데이터 조회해보기</h3>

      <AxiosComponent1 />

      <br/>
      <br/>

      <AxiosComponent2 />

      <br/>
      <hr/>

      <h3>2. 공공데이터 조회해보기</h3>

      <AxiosComponent3 />

      <br/>
      <br/>

      {/* 이 자리에 AxiosComponent4 로 기존에 활용신청했었던 대기오염정보 출력해보기 */}<AxiosComponent4 />

      <br/>
      <hr/>

      <h3>3. 내가 만든 서버로부터 데이터 조회해보기</h3>

      {/*
        * 기존 Spring 프로젝트에 @ResponseBody 어노테이션과 Jackson 라이브러리로
          리액트 프로젝트로부터 들어온 요청을 받아서 처리할 수 있게끔 구현

                                        요청
          리액트 프로젝트 <---------------------------------> 스프링 프로젝트
                                        응답
          localhost:5173~~~                                  localhost:8006/myweb/~~~

        - 서로 다른 두 프로그램 (:5173, :8006) 를 axios 로 연동하는게 핵심!!
      */}

      <AxiosComponent5 />
      
    </div>
  )
}

// 내보내기
export default App