import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Link } from "react-router-dom";

export default function CharacterGallery({data}) {
    return <>
    <SimpleBar style={{ height: '500px' }}>   
    <div className='flex-sp-btw-wrap'> 
     {data && data.map ((character, index) => (
   <div key={index}>
       <Link to={`/characters/${character.id}`}> 
        <img src={`http://localhost:3000/${character.image}`} alt={character.name} className="img-small"/> 
       </Link>        
       <h2>{character.name}</h2>
     </div>))}
     </div>
   </SimpleBar>
   </>

}
