import styled from "styled-components"

const CommentCard = ({key, imageUrl,userName, datePosted, comment}) => {

    const ImageBox = styled.img`
        width:10%;
        height:10%;
    `

    return (
        <div>
        <ImageBox src ={imageUrl} alt = "profile picture"/>
        <h1>{userName}</h1>
        <p>{comment}</p>
        </div>
    )

};

export default CommentCard;