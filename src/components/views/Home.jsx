import React from 'react';
import Navbar from '../molecules/Navbar';
import Footer from '../molecules/Footer';
import Card from '../molecules/Card';
import UseFetch from '../../service/UseFetch';

const Home = () => {
  const url = 'http://127.0.0.1:8000/api/articles/';
  const { data } = UseFetch(url);

  if (!data || !data.articles) {
    return <>Loading</>;
  }

  const articles = data.articles.slice(0, 3);
  return (
    <>
      <Navbar />
      <div className="container flex flex-wrap">
        {articles.map((article) => (
          <div key={article.id} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 p-2">
            <Card
            imageValue={article.image_url}
              titleValue={article.title}
              bodyValue={article.body}
            />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;

