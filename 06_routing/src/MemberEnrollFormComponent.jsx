import { useState } from "react";

function MemberEnrollFormComponent() {

    // 실행할 구문
    const [user, setUser] = useState({ userId : "", userPwd : "", checkPwd : "", userName : "", email : "", gender : "" });

    const handleUser = e => {

        let newUser = {...user};

        newUser[e.target.name] = e.target.value;
        
        setUser(newUser);
    };

    const insertUser = e => {
        
        e.preventDefault();
        if(user.userPwd == user.checkPwd) {
            alert("회원가입에 성공했습니다.");
        } else {
            alert("비밀번호와 비밀번호 확인이 다릅니다.");
        }
        
    }

    // return 구문
    return (
        <div>
            <h2>회원가입</h2>

            <form>
                <table>
                    <tbody>
                        <tr>
                            <th>아이디</th>
                            <td>
                                <input type="text" name="userId" value={ user.userId } onChange={ handleUser } />
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type="password" name="userPwd" value={ user.userPwd } onChange={ handleUser } />
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호 확인</th>
                            <td>
                                <input type="password" name="checkPwd" value={ user.checkPwd } onChange={ handleUser } />
                            </td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type="text" name="userName" value={ user.userName } onChange={ handleUser } />
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <input type="email" name="email" value={ user.email } onChange={ handleUser } />
                            </td>
                        </tr>
                        <tr>
                            <th>성별</th>
                            <td>
                                <input type="radio" name="gender" id="M" value="M" checked={ user.gender == "M" } onChange={ handleUser } /><label htmlFor="M">남자</label>
                                <input type="radio" name="gender" id="F" value="F" checked={ user.gender == "F" } onChange={ handleUser } /><label htmlFor="F">여자</label>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" onClick={ insertUser }>회원가입</button>
            </form>
            {/*
                1. 아이디, 비번, 비번확인, 이름, 이메일, 성별을 입력받되,
                    Controlled Component 형식으로 입력받으시오.
                2. 회원가입버튼은 submit 타입이여야 하며,
                   클릭 시 alert 로 "회원가입에 성공했습니다."
            */}
        </div>
    );
}

// 내보내기
export default MemberEnrollFormComponent;