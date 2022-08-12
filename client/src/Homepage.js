import React, { useContext } from 'react';
import styled from 'styled-components';
import { CategoriesContext } from './CategoriesContext';
import Header from './Header';


const Homepage = () => {
    const {categories} = useContext(CategoriesContext)
    return (
        <Wrapper>
            <Header/>
            {categories&&
                categories.map((el)=>{
                    console.log(el)
                return(
                    <CategoryWrapper>
                        <CategoryBox>
                            <CategoryTitle>{el.title}</CategoryTitle>
                            <BlogBox></BlogBox>
                        </CategoryBox>
                    </CategoryWrapper>
                )
            })}
        </Wrapper>
    );
}

const Wrapper = styled.div`
`
const CategoryBox = styled.div`
`
const CategoryWrapper = styled.div`
display: flex;
`
const CategoryTitle = styled.h3`
`
const BlogBox = styled.div`
display: flex;
`
export default Homepage;