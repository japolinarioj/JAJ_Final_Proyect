import React, { useState } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAuth0 } from '@auth0/auth0-react';

const CreatePost = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log (user)
    const [data, setData]=useState(
        {categories:"",
         title:"",
         description:"",
        })

    const changeHandle =(e)=>{
        const newdata ={...data, username:user.nickname}
        newdata[e.target.name] = e.target.value
        setData(newdata)
    }
    const clickHandle = (e) =>{
        e.preventDefault();
        console.log(data)
        fetch('/api/post-blog',{
            method:"POST",
            body:JSON.stringify(data),
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        })
        .then((res)=>res.json())
        .then((info)=> {
            console.log(info)
            setData({categories:"",
            title:"",
            description:"",
            username:"",
           })
        })
         }
    
    return (
    isAuthenticated &&
        <Wrapper>
            <Blank>
            </Blank>
            <Form onSubmit={(e)=>{clickHandle(e)}}>
                <CreateTitle>Your Post</CreateTitle>
                <label htmlFor='categories'>Category</label>
                <input onChange={(e)=>{changeHandle(e)}} value={data.categories} type="text" name="categories" placeholder="Category"></input>
                <label htmlFor='title'>Title</label>
                <input onChange={(e)=>{changeHandle(e)}} value={data.title} type="text" name="title" placeholder="Title"></input>
                <textarea theme='snow' onChange={(e)=>{changeHandle(e)}} value={data.description} 
                    type="text" name="description" placeholder="Your post"
                    style={{height:'300px', border:'2px solid #167ef5', borderRadius:'10px', margin:'10px'}}></textarea>
                <User> Written by: {user.nickname.charAt().toUpperCase()}{user.nickname.slice(1)}</User>
                <Button type='submit'>Submit your post</Button>

            </Form>   
        </Wrapper>
    );
}

const Wrapper = styled.div`
display: flex;

`
const Blank = styled.div`
flex:60%;
`
const CreateTitle = styled.h2`
padding:10px;
`
const Form = styled.form`
display: flex;
flex-direction: column;
flex:40%;
margin:80px;
padding: 30px;
box-shadow: 2px 0px 13px 10px #68ACFF;
max-height: 800px;
`
const User = styled.p`
padding:10px;
`
const Button =styled.button`
margin:20px 200px;
color: white;
font-family: var(--font-heading);
font-size: 30px;
text-align: center;
background-color: #167ef5;
border-radius: 20px;
cursor: pointer;
border-style: none;
padding: 10px;
`

export default CreatePost;