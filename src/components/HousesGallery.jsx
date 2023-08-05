import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { Link } from "react-router-dom";

export default function CharacterGallery({data}) {

    console.log('Estoy en Houses Gallery');
    return <>
   
    <SimpleBar style={{ height: '500px' }}>   
   
     {data && 
     <div className='houses-gallery'>
     {data.map ((house, index) => (
            <div key={index}>
            <Link to={`/houses/${house.id}`}><img src={`http://localhost:3000/${house.image}`} alt={house.id} className="img-small"/> </Link>      
            
            <div>{house.name}</div>
            </div>))}
     </div>
    }
   
   </SimpleBar>
   </>

}


        