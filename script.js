async function searchNationality() {
	const name = document.getElementById("name-input").value;
  
	try {
	  const response = await fetch(`https://api.nationalize.io/?name=${name}`);
	  const data = await response.json();
	  // extract the two most likely countries from the API response
	  const countries = data.country.slice(0, 2).map((c) => c.country_id);
	  const countryList = countries.join(" and ");
	  document.getElementById("result").innerHTML = `The most likely countries for ${name} are ${countryList}`;
	} catch (error) {
	  document.getElementById("result").innerHTML = `Error searching for nationality: ${error}`;
	}
  };
  