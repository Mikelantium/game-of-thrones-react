import { Routes as RoutesDom } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HousesPage from "./HousesPage/HousesPage";
import CharactersPage from "./CharactersPage/CharactersPage";
import ChronologyPage from "./ChronologyPage/ChronologyPage";
import CharactersDetailPage from "./CharactersDetailPage/CharactersDetailPage";
import HousesDetailPage from "./HousesDetailPage/HousesDetailPage";

export default function Routes (){
    return <RoutesDom>

<Route path="/" element={<HomePage />}/>
<Route path="/houses" element={<HousesPage />} />
<Route path="/characters" element={<CharactersPage />} />
<Route path="/chronology" element={<ChronologyPage />} />
<Route path="/characters/:id" element={<CharactersDetailPage />} />
<Route path="/houses/:id" element={<HousesDetailPage />} />
</RoutesDom>

}
