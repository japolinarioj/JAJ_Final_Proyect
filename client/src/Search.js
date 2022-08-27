import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { BlogsContext } from './Context/BlogsContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {solid} from "@fortawesome/fontawesome-svg-core/import.macro";
import { useNavigate, Link, useParams} from 'react-router-dom';



const Search = () =>{
    const {categories,title} = useParams()
    const {blogs,setBlogs}=useContext(BlogsContext);
    const [filterData, setFilterData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const navigation = useNavigate();

    const handleFilter = (e) =>{
        const searchWord = e.target.value;
        setWordEntered(searchWord);
        const newFilter = blogs.filter((el) =>{
            return el.title.toLowerCase().includes(searchWord.toLowerCase());
        })
        if(searchWord ==="") {
            setFilterData([])
        } else {
            setFilterData (newFilter)}
        }
    const clearInput = () =>{
        setFilterData([])
        setWordEntered("")
    }

    return (
        <Wrapper>
            <SearchBox>
                <label>Search</label>
                <SearchInput type="text" 
                placeholder="Enter your search here" value={wordEntered} onChange={handleFilter}></SearchInput>
                {filterData.length === 0
                ?<Icon><FontAwesomeIcon icon={solid('magnifying-glass')}/></Icon>
                :<Icon onClick={clearInput}><FontAwesomeIcon icon={solid('circle-xmark')}/></Icon>}
            </SearchBox>
            {filterData.length>0 && (
            <SearchResult>
                {blogs &&
                filterData.map((el)=>{
                    return(
                        <BlogLink to={`/blogs/${categories}/${el.title}`}>
                            <BlogTitle>{el.title}</BlogTitle>
                        </BlogLink>
                )}
                )}
            </SearchResult>)}
        </Wrapper>

    );
}


const Wrapper = styled.div`
`
const SearchBox = styled.div`
display: flex;
align-items: center;
`
const SearchInput = styled.input`
width: 400px;
`
const SearchResult = styled.div`
margin: 5px 80px;
width: 420px;
height: fit-content;
box-shadow: 2px 0px 20px 1px #68ACFF;
overflow: hidden;
overflow-y: auto;
::-webkit-scrollbar{
    display: none;
}
`
const Icon = styled.div`
color:#167ef5;
margin-left:-50px;
`
const BlogLink = styled(Link)`
text-decoration: none;
`

const BlogTitle = styled.p`
padding: 10px;
font-size: 15px;
margin-left: 10px;
:hover{
    background-color: #167ef5;
    color: white;
}
`

export default Search;