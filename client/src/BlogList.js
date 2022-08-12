import React, { useContext } from 'react';
import styled from 'styled-components';
import { BlogsContext } from './Context/BlogsContext';

const BlogList = () => {
    const {blogs}=useContext(BlogsContext)
    console.log(blogs)
    return (
        <Wrapper>

          {blogs&&
           blogs.map((el)=>{
            return(
                <Blog>
                    <BlogTitle>{el.title}</BlogTitle>
                    <BlogDescription>{el.description}</BlogDescription>
                </Blog>
            )
           })
          }  
        </Wrapper>
    );
}

const Wrapper = styled.div`
`
const Blog = styled.div`
`
const BlogTitle = styled.h3`
`
const BlogDescription =styled.div`
`
export default BlogList;