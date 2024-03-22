import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../../service/UseFetch';
import Navbar from './Navbar';
import Footer from './Footer';

const Article = () => {
    const {id} = useParams();
    const url = `http://127.0.0.1:8000/api/articles/${id}`;
    const {data, isLoading, error} = UseFetch(url);
    if (isLoading){
        return <>Loading...</>;
    }
    if (error || !data || !data.article){
        console.log(data);
        return <>Error loading article </>;
    }
    const article = data.article ; 
    console.log(article);

  return (
<>
<div>
    <Navbar />
</div>
<div>
    <h1>{article.title}</h1>
</div>
<div>
    <img src={article.image} alt="" />
</div>
<div>
    <p>{article.body}</p>
</div>
<div>
    <Footer />
</div>
</>

   
  )
}

export default Article