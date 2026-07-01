import "./ReplyItemComponent.css"

function ReplyItemComponent(props) {

    // 실행할 구문
    // console.log(props);

    // return 구문
    return (
        <div className="replyItem">
            <div>{ props.replyWriter }</div>
            <div>{ props.replyContent }</div>
        </div>
    );
}

// 내보내기
export default ReplyItemComponent;