import React from "react";
import Comment from "./Comment";

// Comment 데이터를 별도의 객체로 분리
const comments = [
    {
        name: "이윤선",
        comment: "안녕하세요, 이윤선입니다.",
    },
    {
        name:"유재석",
        comment: "리액트 재미있어요~",
    },
    {
        name: "이인재",
        comment: "저도 리액트 배워보고 싶어요!",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
        </div>
    );
}

export default CommentList;