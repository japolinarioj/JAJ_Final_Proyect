import React, { useState } from 'react';
import styled from 'styled-components';

const CreatePost = () => {
    const [data, setData]=useState(
        {categories:"",
         title:"",
         description:"",
         username:"",
        })

    const changeHandle =(e)=>{
        const newdata ={...data}
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
        <Wrapper>
            <Blank></Blank>
            <Form onSubmit={(e)=>{clickHandle(e)}}>
                <CreateTitle>Your Post</CreateTitle>
                <label htmlFor='categories'>Category</label>
                <input onChange={(e)=>{changeHandle(e)}} value={data.categories} type="text" name="categories" placeholder="categories"></input>
                <label htmlFor='title'>Title</label>
                <input onChange={(e)=>{changeHandle(e)}} value={data.title} type="text" name="title" placeholder="title"></input>
                <Description onChange={(e)=>{changeHandle(e)}} value={data.description} type="text" name="description" placeholder="Your post"></Description>
                <label htmlFor='username'>Username</label>
                <input onChange={(e)=>{changeHandle(e)}} value={data.username} type='text' name='username' placeholder='Your name'></input>
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
`
const Form = styled.form`
display: flex;
flex-direction: column;
flex:40%;
margin:80px;
padding: 30px;
box-shadow: 2px 0px 13px 10px #68ACFF;
`
const Description = styled.input`
justify-content: flex-start;
height: 200px;
`
const Button =styled.button`
margin:20px 150px;
`

export default CreatePost;