const flights = document.getElementById("flight");

flights.addEventListener("click", getFlight);

function getFlight() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "0c61322343mshe5386bc17e61688p19e553jsnd4d160510343",
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
    },
  };

  fetch(
    "https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=eiffel%20tower&lang=en_US&units=km",
    options
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}
