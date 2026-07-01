import { useState } from "react";

function LoginForComponent() {

    // 실행할 구문
    const [user, setUser] = useState({ userId : "", userPwd : "" })

    const handleUser = e => {

        let loginUser = {...user};
        loginUser[e.target.name] = e.target.value;
        setUser(loginUser);

    }

    const login = e => {
        e.preventDefault();
        alert("로그인에 성공했습니다.");
    }

    // return 구문
    return (
        <div>
            <h2>로그인</h2>

            <form>
                <table>
                    <tbody>
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input type="text" name="userId" value={ user.userId }  onChange={ handleUser } />
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type="password" name="userPwd" value={ user.userPwd } onChange={ handleUser } />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" onClick={ login }>로그인</button>
            </form>
            {/*
                1. 아이디, 비번을 입력받되,
                   Controlled Component 형식으로 입력받으시오.
                2. 로그인 버튼은 submit 타입이여야 하며,
                   클릭 시 alert 로 "로그인에 성공했습니다." 를 출력하시오.
                3. 스타일은 자유
            */}
        </div>
    );
}

export default LoginForComponent;