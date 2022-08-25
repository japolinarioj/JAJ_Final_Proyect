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
                return(
                        <CategoryBox onClick={(ev)=>{
                            ev.preventDefault();
                            navigation(`/blogs/${el.title}`)
                        }}>
                            <CategoryTitle>{el.title}</CategoryTitle>
                            <CategoryImage>
                                <Image src={el.url}/>
                            </CategoryImage>
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
height: 210px;
border: 2px solid lightgray;
margin:20px;
border-radius: 10px;
cursor: pointer;
:hover+{
    
}
`
const CategoryTitle = styled.h3`
:hover{
    font-size: x-large;
}
`
const CategoryImage = styled.div`
display: flex;
justify-content: center;
margin-top: 15px;
height: 160px;

`
const Image = styled.img`
width:250px;
object-fit: cover;
z-index: -1;
opacity: 1;
border-radius:10px;
:hover{
    opacity: 0.6;
}

`
export default Homepage;