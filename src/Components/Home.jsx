import Menu from "./Menu";
import Actualites from "./Actualites";
import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
   const [actus, setActus] = useState([]);

   const postActu = async () => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=fr&apiKey=28f2c4df1f144f088a909669f9fbf21b&pageSize=4`);
      const data = await response.json();
      setActus(data.articles);
   };

   useEffect(() => {
      postActu();
   }, []);

   const renderArticle = () => {
      return actus?.map(({ author, publishedAt, title, url, urlToImage }, index) => {
         return (
            <div key={index} className="container">
               <Actualites author={author} publishedAt={publishedAt} title={title} url={url} urlToImage={urlToImage} />
            </div>
         );
      });
   };

   return (
      <>
         <div className="homeContainer">
            <Menu />
            <h1>Les actualités de Nono</h1>
            {renderArticle()}
         </div>
      </>
   );
}

export default Home;
