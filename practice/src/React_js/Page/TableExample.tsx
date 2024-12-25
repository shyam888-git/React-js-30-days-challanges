import { placesData } from "../data";
import Table from "../Table/Table";
import { useState } from "react";
import { useDebouncedValue } from "../utils/function";
const TableExample = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const debounceSearchTerm = useDebouncedValue({
    inputValue: searchTerm,
    delay: 2000,
  });
  const cities = Array.from(new Set(placesData?.map((place) => place.city)));
  console.log(cities, "cities");
  const filterData = placesData?.filter((place) => {
    const name = place.name
      .toLocaleLowerCase()
      .includes(debounceSearchTerm.toLocaleLowerCase());
    const discription = place.description
      .toLocaleLowerCase()
      .includes(debounceSearchTerm.toLocaleLowerCase());
    const city =
      selectedCity === "" ||
      place.city.toLocaleLowerCase() === selectedCity.toLocaleLowerCase();
    return (name || discription) && city;
  });

  return (
    <>
      <input
        type="search"
        placeholder="Search here"
        style={{ margin: "10px 20px", padding: "10px 30px" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
        style={{ margin: "10px 20px", padding: "10px 20px" }}
      >
        <option value="">All Values</option>
        {cities?.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <Table placesData={filterData} />
    </>
  );
};

export default TableExample;
