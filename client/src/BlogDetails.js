import React, {  useEffect, useContext, useState} from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
 const [blogDetails,setBlogDetails] = useState({
    _id:"",
    categories:"",
    title:"",
    description:"",
    username:"",
    timeStamp:"",
 })
 const {categories, title} = useParams();

    useEffect(()=>{
        fetch(`/api/blogs/${categories}/${title}`)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data.data)
            setBlogDetails(data.data)
        })
    },[]);

console.log(blogDetails)
     return (

        <h1>
           Blog Details 
        </h1>
    );
}

export default BlogDetails;