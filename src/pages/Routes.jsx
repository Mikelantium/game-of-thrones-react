import { Routes as RoutesDom } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import CharactersPage from "./CharactersPage/CharactersPage";

export default function Routes (){
    return <RoutesDom>

<Route path="/" element={<HomePage />}/>
<Route path="/characters" element={<CharactersPage />} />
</RoutesDom>
}
