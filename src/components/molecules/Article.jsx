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
    <h1 className='mb-6 ml-20 mt-12 text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-12 '>{article.title}</h1>
</div>
<div>
    <img className='rounded-t-lg w-10/12 h-40  mx-20 ' src={article.image} alt="" />
</div>
<div>
    <p className='mb-2 mx-20 mt-8 w-10/12 font-normal text-gray-700 dark:text-gray-400 h-32'>{article.body}</p>
</div>
<div>
    <Footer/>
</div>
</>

   
  )
}

export default Article