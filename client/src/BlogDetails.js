import React, {  useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro"



const BlogDetails = () => {
const { user, isAuthenticated, isLoading } = useAuth0();
 const [blogDetails,setBlogDetails] = useState({
    _id:"",
    categories:"",
    title:"",
    description:"",
    username:"",
    timeStamp:"",
 })
 const {categories, title} = useParams();

    useEffect(()=>{
        fetch(`/api/blogs/${categories}/${title}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.data)
            setBlogDetails(data.data)
        })
    },[]);

const DeleteBlog = (title) =>{
    fetch(`/api/delete-blog/${title}/${user.nickname}`,{
    method:"DELETE"})
    .then((res) => res.json())
    .then((data)=>{
        window.alert("blog deleted")
    })

}

console.log(blogDetails)
     return (
        <Wrapper>
            {blogDetails &&
            <BlogWrapper>
                <BlogTitle>{blogDetails.title}</BlogTitle>
                <BlogDescription>{blogDetails.description}</BlogDescription>
                {blogDetails.photo && 
                    <BlogImage>
                        <Image />
                    </BlogImage>}
                <BlogDate>Posted on: {blogDetails.timeStamp} </BlogDate>
                <User> Written by: {blogDetails.username.charAt().toUpperCase()}{blogDetails.username.slice(1)}</User>
                <BlogFooter>
                    <Icon><FontAwesomeIcon icon={solid('thumbs-up')}style={{width:"30px"}}/></Icon>
                    <Icon><FontAwesomeIcon icon={solid('thumbs-down')}/></Icon>
                    <Icon><FontAwesomeIcon icon={solid('reply')}/></Icon>
                    {isAuthenticated &&
                    user.nickname===blogDetails.username &&
                    <>
                    <Icon onClick={()=>{DeleteBlog(blogDetails.title)}}><FontAwesomeIcon icon={solid('trash-can')}/></Icon>
                    <Icon><FontAwesomeIcon icon={solid('pen')}/></Icon>
                    </>}
                </BlogFooter>
            </BlogWrapper>}

        </Wrapper>
    );
}

const Wrapper=styled.div`
justify-content: center;
`
const BlogWrapper = styled.div`
margin: 50px 400px;
display: flex;
flex-direction: column;
justify-content: center;
max-width: 900px;
max-height: 800px ;
box-shadow: 2px 0px 20px 1px #68ACFF;
padding:30px;

`
const BlogTitle = styled.h2`
padding: 30px;

`
const BlogDescription = styled.p`
line-height: 30px;
padding: 30px;


`
const BlogImage = styled.div`
padding: 30px;

`
const Image = styled.img`
`
const BlogDate = styled.p`
padding: 30px;

`
const BlogFooter = styled.div`
display: flex;
padding: 20px;
justify-content: space-evenly;
`
const User = styled.p`
padding: 30px;

`
const Icon = styled.div`
margin:5px 30px;
:hover{
    cursor: pointer;
}
`
export default BlogDetails;