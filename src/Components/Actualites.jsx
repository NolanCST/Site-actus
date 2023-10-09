import "./Actualites.css";

function Actualites(props) {
   return (
      <>
         <div>
            <a className="infosActus" href={props.url} target="_blank">
               <div>
                  <h3>{props.title}</h3>
                  <img src={props.urlToImage} />
                  <h3>{props.description}</h3>
                  <p>Publie le {props.publishedAt}</p>
                  <h4>Ecrit par: {props.author}</h4>
               </div>
            </a>
         </div>
      </>
   );
}

export default Actualites;
