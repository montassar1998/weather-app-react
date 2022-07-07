import React, { useState } from "react";
import './searchBar.css'
import SearchIcon from '@mui/icons-material/Search'
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c2a27fb030msha8320eab6dab06bp1cf32cjsnebc1e80d9aec',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};
function SearchBarch({ placeholder, changeCity }) {
    const [filteredData, setFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value
        console.log("Sw" + searchWord + "," + typeof searchWord + "," + searchWord.length)
        if (searchWord == '') {
            setFilteredData([])
            return
        }
        fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=` + searchWord.toLowerCase() + `&asciiMode=true`, options)
            .then(response => response.json())
            .then(response => {
                let res = []
                for (let i in response.data) {
                    res.push(response.data[i]);
                }
                console.log("res ", res);
                setFilteredData(res)
            })
            .catch(err => console.error(err));
    }
    function HandleUserChoice(event) {
        console.log("click detected", event.target.text)
        console.log("filtering this ", filteredData)
        //find city latitude and longitude 
        var lat = 0
        var long = 0
        var cityName = event.target.text.toString()
        for (let i of filteredData) {
            console.log("i = ", cityName.toLowerCase().length, i.city.toLowerCase().length, cityName.toLowerCase(), i.city.toLowerCase())
            if (cityName.toLowerCase() === i.city.toLowerCase()) {
                lat = i.latitude
                long = i.longitude
                //alert("gothcha")
            }
        }
        changeCity({ cityName, lat, long })
    }
    return (
        <div className="search">
            <div className="searchInputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter}></input>
                <div className="searchIcon">
                    <SearchIcon></SearchIcon>
                </div>
            </div>
            {filteredData.length !== 0 && (
                <div className="dataResult">
                    {filteredData.map((value, key) => {
                        console.log("hello am a an")
                        return (<a key={value.id} className="dataItem" target="_blank" onClick={HandleUserChoice}>{value.city}</a>
                        );
                    })}
                </div>
            )}
        </div>
    )
}
export default SearchBarch;