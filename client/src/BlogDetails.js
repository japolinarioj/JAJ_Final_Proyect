import React, {  useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro"
import UpdateForm from './UpdateForm';

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
 
 const [isShown, setIsShown] = useState(false)
 const {categories, title} = useParams();

 const handleClick = (e) =>{
    setIsShown(true)
 }   
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
                    {/* <Icon><FontAwesomeIcon icon={solid('thumbs-up')}style={{width:"30px"}}/></Icon>
                    <Icon><FontAwesomeIcon icon={solid('thumbs-down')}/></Icon> */}
                    <Icon><FontAwesomeIcon icon={solid('reply')}/></Icon>
                    {isAuthenticated &&
                    user.nickname===blogDetails.username &&
                    <>
                    <Icon onClick={()=>{DeleteBlog(blogDetails.title)}}><FontAwesomeIcon icon={solid('trash-can')}/></Icon>
                    <Icon onClick={handleClick}><FontAwesomeIcon icon={solid('pen')}/></Icon>
                    </>}
                </BlogFooter>
            </BlogWrapper>
            }
            {isShown && (
                        <UpdateForm {...{blogDetails, setBlogDetails}}/>
                    )}
        </Wrapper>
    );
}

const Wrapper=styled.div`
justify-content: center;
display: flex;
justify-items: center;
align-content: space-between;
`
const BlogWrapper = styled.div`
margin: 80px 200px ;
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