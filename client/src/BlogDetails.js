import React, {  useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import { BlogsContext } from './Context/BlogsContext';

const BlogDetails = () => {
 const {_id} = useParams();

 const [blogDetails, setBlogDetails] = useContext(BlogsContext)
 console.log()
 
 useEffect(()=>{
    fetch(`/api/get-blogs/category/${_id}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        setBlogDetails(data)
        console.log(blogDetails)
    })
},[]);
console.log(blogDetails)


     return (
        <div>
           Blog Details 
        </div>
    );
}

export default BlogDetails;