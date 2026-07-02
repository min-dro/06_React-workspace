import { useState } from "react";

function MemberEnrollFormComponent(props) {

    // 실행할 구문
    const [inputValue, setInputValue] = useState({ userId : "", userPwd : "", checkPwd : "", userName : "", email : "", gender : "" });

    const handleUser = e => {

        let newInput = {...inputValue};

        newInput[e.target.name] = e.target.value;
        
        setInputValue(newInput);
    };

    const insertUser = e => {
        
        e.preventDefault();
        if(inputValue.userPwd != inputValue.checkPwd) {
            alert("비밀번호와 비밀번호 확인이 다릅니다.");
        } else if(inputValue.userId == "" || inputValue.userPwd == ""){
            alert("아이디 또는 비밀번호가 비어있습니다.");
        } else {
            alert("회원가입에 성공했습니다.");
            let newUser = [...props.user];
            newUser.push(inputValue);
            props.setUser(newUser);
            setInputValue({ userId : "", userPwd : "", checkPwd : "", userName : "", email : "", gender : "" });
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
                                <input type="text" name="userId" value={ inputValue.userId } onChange={ handleUser } />
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>
                                <input type="password" name="userPwd" value={ inputValue.userPwd } onChange={ handleUser } />
                            </td>
                        </tr>
                        <tr>
                            <th>비밀번호 확인</th>
                            <td>
                                <input type="password" name="checkPwd" value={ inputValue.checkPwd } onChange={ handleUser } />
                            </td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type="text" name="userName" value={ inputValue.userName } onChange={ handleUser } />
                            </td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>
                                <input type="email" name="email" value={ inputValue.email } onChange={ handleUser } />
                            </td>
                        </tr>
                        <tr>
                            <th>성별</th>
                            <td>
                                <input type="radio" name="gender" id="M" value="M" checked={ inputValue.gender == "M" } onChange={ handleUser } /><label htmlFor="M">남자</label>
                                <input type="radio" name="gender" id="F" value="F" checked={ inputValue.gender == "F" } onChange={ handleUser } /><label htmlFor="F">여자</label>
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