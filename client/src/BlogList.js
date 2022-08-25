import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { BlogsContext } from './Context/BlogsContext';
import CreatePost from './CreatePost';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro"
import useDocumentTitle from './useDocumentTitle';


const BlogList = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const {blogs,setBlogs}=useContext(BlogsContext);
    const [search, setSearch] = useState("");

    const {categories} = useParams();
    useEffect(()=>{
        fetch(`/api/get-blogs/${categories}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.data)
            setBlogs(data.data)
        })
    },[]);

    
    useDocumentTitle(`Econtalks/${categories}`, `Econtalks_Final_Project`)

    const DeleteBlog = (title) =>{
        fetch(`/api/delete-blog/${title}/${user.nickname}`)
        .then((res)=>res.json())
        .then((data)=>{
            window.alert(data)
        })
    }

    return (
        isAuthenticated
        ?(<Wrapper>
            <SearchBox>
                <label>Search</label>
                <SearchInput type="text" onChange={(e)=> {setSearch(e.target.value)}}></SearchInput>
            </SearchBox>
            <BlogsBox>
                <BlogsList>
                {blogs&&
                blogs.map((el)=>{
                
                    return(
                    <Blog>
                        <BlogTitle>{el.title}</BlogTitle>
                        <BlogDescription>{el.description}</BlogDescription>
                        <BlogFooter>
                            <Icon><FontAwesomeIcon icon={solid('thumbs-up')}style={{width:"30px"}}/></Icon>
                            <Icon><FontAwesomeIcon icon={solid('thumbs-down')}/></Icon>
                            <Icon><BlogDate>Posted on: {el.timeStamp}</BlogDate></Icon>
                            <Icon><FontAwesomeIcon icon={solid('reply')}/></Icon>
                            {user.nickname===el.username &&
                            <>
                            <Icon onClick={()=>{DeleteBlog(el.title)}}><FontAwesomeIcon icon={solid('trash-can')}/></Icon>
                            <Icon><FontAwesomeIcon icon={solid('pen')}/></Icon>
                            </>}


                        </BlogFooter>
                    </Blog>
                    )})
                    } 
                </BlogsList>
                <CreatePost/>

            </BlogsBox>
            
            
        </Wrapper>
        )
        :(<Wrapper>
            <SearchBox>
                <label>Search</label>
                <SearchInput type="text" onChange={(e)=> {setSearch(e.target.value)}}></SearchInput>
            </SearchBox>
            <BlogsBox>
                <BlogsList>
                {blogs&&
                blogs.map((el)=>{
                
                    return(
                    <Blog>
                        <BlogTitle>{el.title}</BlogTitle>
                        <BlogDescription>{el.description}</BlogDescription>
                        <BlogFooter>
                            <FontAwesomeIcon icon={solid('thumbs-up')}/>
                            <FontAwesomeIcon icon={solid('thumbs-down')}/>
                            <BlogDate>Posted on: {el.timeStamp}</BlogDate>
                            <FontAwesomeIcon icon={solid('reply')}/>
                        </BlogFooter>
                    </Blog>
                    )})
                    } 
                </BlogsList>
            </BlogsBox>
      
            
        </Wrapper>
    ))
}

const Wrapper = styled.div`
display: flex;
flex-direction:column;
margin: 40px auto auto 40px;
`
const SearchBox = styled.div`
`
const SearchInput = styled.input`
width: 400px;
`

const BlogsBox = styled.div`
display: flex;
width: 100%;
margin-top:20px;
`
const BlogsList = styled.div`
flex:60%;
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
const BlogTitle = styled.h3`

:hover{
    font-size:larger;
    cursor:pointer;
}
`

const BlogDescription =styled.div`
`
const BlogDate = styled.div`
justify-content:right;
color:grey;
`
const BlogFooter = styled.div`
display: flex;
padding: 20px;
`
const Icon = styled.div`
margin:5px 30px;
:hover{
    cursor: pointer;
}
`

export default BlogList;