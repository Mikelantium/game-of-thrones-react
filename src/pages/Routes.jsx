import { Routes as RoutesDom } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import CharactersPage from "./CharactersPage/CharactersPage";
import CharactersDetailPage from "./CharactersDetailPage/CharactersDetailPage";
import HousesPage from "./HousesPage/HousesPage";
import HousesDetailPage from './HouseDetailPage/HouseDetailPage' 
import ChronologyPage from './ChronologyPage/ChronologyPage' 

export default function Routes (){
    return <RoutesDom>

<Route path="/" element={<HomePage />}/>
<Route path="/characters" element={<CharactersPage />} />
<Route path="/characters/:id" element={<CharactersDetailPage />} />
<Route path="/houses" element={<HousesPage />} />
<Route path="/houses/:id" element={<HousesDetailPage />} />
<Route path="/chronology" element={<ChronologyPage />} />
</RoutesDom>
}
