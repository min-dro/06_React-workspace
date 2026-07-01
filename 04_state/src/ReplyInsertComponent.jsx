import "./ReplyInsertComponent.css";

function ReplyInsertComponent(props) {

    // 실행할 구문
    // console.log(props);

    const insertReply = e => {

        e.preventDefault();
        // > 기본이벤트 제거

        // 사용자로부터 입력받은 본인 이름, 댓슬 내용을 변수에 담기
        let replyWriter = document.getElementById("replyWriter").value;
        let replyContent = document.getElementById("replyContent").value;

        // 위의 두 변수를 하나의 객체로 묶기
        /*
        let replyItem = {
            replyWriter : replyWriter,
            replyContent : replyContent
        };
        */

        let replyItem = {
            replyWriter,
            replyContent
        };
        // > 객체 확장 표현식으로 축약해서 쓸 수 있음 (변수명이 곧 키값)

        // 기존의 배열형식의 State 변수를 깊은 복사 후 push
        let newReplyList = [...props.replyList];
        // newReplyList.push(replyItem);
        newReplyList.unshift(replyItem);
        // [0] 번 데이터로 밀고 들어가는것 (방금 작성한 댓글을 최상단에 배치)

        props.setReplyList(newReplyList);
        
        // 입력창 초기화 효과
        document.querySelector("#replyWriter").value = "";
        document.querySelector("#replyContent").value = "";
    };

    // return 구문
    return (
        <div>
            <form>
                <table id="replyInsertForm">
                    <tbody>
                        <tr>
                            <th>이름</th>
                            <td>
                                <input type="text" id="replyWriter" />
                            </td>
                        </tr>
                        <tr>
                            <th>내용</th>
                            <td>
                                <textarea id="replyContent" 
                                          placeholder="300자 이내로 입력하세요" maxLength={ 300 }></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit" onClick={ insertReply }>작성하기</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
}

// 보내보기
export default ReplyInsertComponent;