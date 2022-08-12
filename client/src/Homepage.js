import React, { useContext } from 'react';
import styled from 'styled-components';
import { CategoriesContext } from './Context/CategoriesContext';
import Header from './Header';
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
    const {categories} = useContext(CategoriesContext)
    
    const navigation=useNavigate();
    console.log(categories)
    
    return (
        <Wrapper>
            <Header/>
            <CategoryWrapper>
            {categories&&
                categories.map((el)=>{
                    console.log(el)
                return(
                        <CategoryBox onClick={(ev)=>{
                            ev.preventDefault();
                            navigation(`/blogs/${el.title}`)
                        }}>
                            <CategoryTitle>{el.title}</CategoryTitle>
                            <BlogBox></BlogBox>
                        </CategoryBox>
                 )
                })}
            </CategoryWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
`
const CategoryWrapper = styled.div`
display: flex;
flex-wrap: wrap;
`
const CategoryBox = styled.div`
flex:30%;
height: 200px;
border: 3px dashed #167ef5;
margin:20px;
cursor: pointer;
`
const CategoryTitle = styled.h3`
`
const BlogBox = styled.div`
display: flex;
`
export default Homepage;