import ReplyItemComponent from "./ReplyItemComponent";

function ReplyListComponent(props) {

    // 실행할 구문
    // console.log(props)

    // return 구문
    return (
        <div>
            {
                props.replyList.map((item, index) => {
                    return (
                        <ReplyItemComponent key={ index }
                                            replyWriter={ item.replyWriter }
                                            replyContent={ item.replyContent } />
                    );
                })
            }
        </div>
    );
}

// 내보내기
export default ReplyListComponent;