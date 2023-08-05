import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


export default function ChonologyGallery({data}) {
    return <>
    <SimpleBar style={{ height: '500px' }}>   
     {data && data.map ((character, index) => (
   <div key={index}>
        
       <h4> {character.age}</h4>
       <h2>{character.name}</h2>
       <img src={`http://localhost:3000/${character.image}`} alt={character.name} className="img-small"/>         
       
     </div>))}
   </SimpleBar>
   </>

}

