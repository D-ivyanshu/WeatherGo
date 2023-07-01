import { useState } from "react";
import Navbar from "./components/NavBar";
import WeatherCard from "./components/WeatherCard";

export interface Query{
  city: string, 
  unit?: string
}


const App = () => {
  
  const [query, setQuery] = useState<Query>({} as Query);
  return (
    <>
    <div className="app">
    <Navbar onSearch={(searchText) => setQuery({...query,city: searchText})} />
    <WeatherCard query={query}/> 
    </div>
    </>
  );
};

export default App;
