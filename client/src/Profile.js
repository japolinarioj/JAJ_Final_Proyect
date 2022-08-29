import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./Loading";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import UpdateForm from "./UpdateForm";
import {Link} from 'react-router-dom';

const Profile = (props) => {
  console.log(props)
  const { user, isAuthenticated, isLoading } = useAuth0();
  const {username} = useParams();
  const [userBlogs,setUserBlogs] = useState({
    _id:"",
    categories:"",
    title:"",
    description:"",
    username:"",
    timeStamp:"",
 })
console.log(username)
 const [isShown, setIsShown] = useState(false)

 const handleClick = (e) =>{
  setIsShown(true)
}
 useEffect(()=>{
  fetch(`/api/users/${username}`)
  .then((res)=>res.json())
  .then((data)=>{
      console.log(data.data)
      setUserBlogs(data.data)
  })
},[]);
console.log(userBlogs)
const DeleteBlog = (title) =>{
  fetch(`/api/delete-blog/${title}/${user.nickname}`,{
  method:"DELETE"})
  .then((res) => res.json())
  .then((data)=>{
      window.alert("blog deleted")
  })
}

  if (isLoading) {
    return (
        <Loading/>
    );
  }
  return (
    username && 
    (<Wrapper>
        <UserBlogs>
          <h2> Blogs by: {user.nickname.charAt().toUpperCase()}{user.nickname.slice(1)}</h2>
          <BlogsList>
          {userBlogs &&
            userBlogs.map((el)=>{
              return(
                <Blog>
                    <BlogLink to={`/blogs/${el.categories}/${el.title}`}>
                        <BlogTitle>{el.title}</BlogTitle>
                    </BlogLink>
                    <BlogDescription>{el.description}</BlogDescription>
                    <BlogFooter>
                        {/* <Icon><FontAwesomeIcon icon={solid('thumbs-up')}style={{width:"30px"}}/></Icon>
                        <Icon><FontAwesomeIcon icon={solid('thumbs-down')}/></Icon> */}
                        <Icon><BlogDate>Posted on: {el.timeStamp}</BlogDate></Icon>
                        <Icon><FontAwesomeIcon icon={solid('reply')}/></Icon>
                        {user.nickname===el.username &&
                        <>
                        <Icon onClick={()=>{DeleteBlog(el.title)}}><FontAwesomeIcon icon={solid('trash-can')}/></Icon>
                        <Icon onClick={handleClick}><FontAwesomeIcon icon={solid('pen')}/></Icon>
                        </>}
                    </BlogFooter> 
                </Blog>
                )})}
            </BlogsList>
        </UserBlogs>
        <RightSide>
          <UserProfile>
              <Image src={user.picture} alt={user.name} />
                <h2> Blogs by: {user.nickname.charAt().toUpperCase()}{user.nickname.slice(1)}</h2>
              <p>{user.email}</p>
              <p> Blogging since: {user.updated_at}</p>
          </UserProfile>
        {isShown && (
            <UpdateForm {...{userBlogs,setUserBlogs}}/>
          )}
        </RightSide>
      </Wrapper>
    )
  );
};

const Wrapper = styled.div`
display: flex;
`
const UserBlogs = styled.div`
display: flex;
flex-direction: column;
flex:50%;
margin:100px 60px;
`
const Blog = styled.div`
display:flex;
flex-direction: column;
align-items: center;
line-height: 30px;
border: 2px solid lightgray;
padding:20px;
border-radius: 10px;
margin:20px;
`
const BlogLink = styled(Link)`
text-decoration: none;
`
const BlogsList = styled.div`
flex:60%;
`
const BlogTitle = styled.h3`
padding: 30px;
:hover{
    font-size:larger;
    cursor:pointer;
}
`
const BlogDescription = styled.p`
line-height: 30px;
padding: 30px;
`
const BlogDate = styled.p`
padding: 30px;
`
const BlogFooter = styled.div`
display: flex;
padding: 20px;
justify-content: space-evenly;
`

const Icon = styled.div`
margin:5px 30px;
:hover{
    cursor: pointer;
}
`
const Image = styled.img`
width: 100px;
`
const RightSide = styled.div`
flex:50%;
`
const UserProfile = styled.div`
margin:80px 20px 0 20px;
padding:80px 60px;
width: 600px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
box-shadow: 2px 0px 13px 10px #68ACFF;
height: 300px;
`
export default Profile;