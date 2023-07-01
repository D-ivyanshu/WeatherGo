import { HStack} from "@chakra-ui/react";
import SearchBar from "./SearchBar";
import { TiWeatherCloudy } from "react-icons/ti";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={["1px", "13px"]} display={["inline", "flex"]} justifyContent="center">
      <HStack padding={["1px","15px"]} marginLeft={[2,0]} marginRight={[10,320]}>
      <h2>WeatherGo</h2>
        <TiWeatherCloudy />
      </HStack>  
        <SearchBar onSearch={onSearch}/>
    </HStack>
  )
};

export default Navbar;