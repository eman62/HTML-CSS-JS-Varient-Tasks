async function countryInfo(countryName){

        try{
                //let countryName ="Libya"
                let response=await fetch(`https://restcountries.com/v2/name/${countryName}`);
                let data=await response.json();
                document.querySelector("body").append( createCard(data));
                console.log(data);

                let neighborCountryCode = data[0]?.borders[0];
            if (neighborCountryCode) {
                let neighborResponse = await fetch(`https://restcountries.com/v2/name/${neighborCountryCode}`);
                let neighborData = await neighborResponse.json();
                document.querySelector("body").append(createCard(neighborData));
                console.log("Neighbor Country Data:", neighborData);
               }
            else {
                throw new Error("No neighbor country found.");
            }
                
        }catch(error)
        {
            console.log(error);
        }

}
