import Menu from "./Menu";
import Actualites from "./Actualites";
import { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { TextField } from "@mui/material";

function Search() {
   const [actus, setActus] = useState([]);
   const [search, setSearch] = useState("");
   const [date, setDate] = useState("");

   const handleInputChange = (e) => {
      setSearch(e.target.value);
   };

   const handleInputChangeDate = (e) => {
      setDate(e.target.value);
   };

   const postActu = async () => {
      let response = await fetch(`https://newsapi.org/v2/everything?q=${search}&from=${date}&sortBy=popularity&apiKey=28f2c4df1f144f088a909669f9fbf21b&pageSize=20`);

      const data = await response.json();

      setActus(data.articles);
   };

   const renderArticle = () => {
      return actus?.map(({ author, description, publishedAt, title, url, urlToImage }, index) => {
         return (
            <div key={index} className="container">
               <Actualites author={author} description={description} publishedAt={publishedAt} title={title} url={url} urlToImage={urlToImage} />
            </div>
         );
      });
   };

   return (
      <>
         <div className="searchContainer">
            <Menu />
            <h1>La banque a infos</h1>
            <div>
               <TextField onChange={handleInputChange} id="outlined-basic" label="Que cherchez-vous ?" variant="outlined" color="warning" />
               {/* <input className="inputSearch" onChange={handleInputChange} type="text" placeholder="Votre recherche"></input> */}
               <input className="inputSearch" onChange={handleInputChangeDate} type="date"></input>
               <IconButton onClick={postActu} aria-label="search" size="large">
                  <SearchIcon fontSize="inherit" />
               </IconButton>
            </div>
            {renderArticle()}
         </div>
      </>
   );
}

export default Search;
