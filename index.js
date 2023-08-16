const countries = [
  {
    id: 1,
    name: "Australia",
    population: 25499884,
    code: "AU",
  },
  {
    id: 2,
    name: "Belgia",
    population: 11589623,
    code: "BE",
  },
  {
    id: 3,
    name: "Brazylia",
    population: 212559417,
    code: "BR",
  },
  {
    id: 4,
    name: "Kanada",
    population: 37742154,
    code: "CA",
  },
  {
    id: 5,
    name: "Chorwacja",
    population: 4105267,
    code: "HR",
  },
  {
    id: 6,
    name: "Finlandia",
    population: 5540720,
    code: "FI",
  },
  {
    id: 7,
    name: "Grecja",
    population: 10423054,
    code: "GR",
  },
  {
    id: 8,
    name: "Polska",
    population: 37846611,
    code: "PL",
  },
  {
    id: 9,
    name: "Hiszpania",
    population: 46754778,
    code: "ES",
  },
  {
    id: 10,
    name: "Ukraina",
    population: 43733762,
    code: "UA",
  },
];

const countriesTableDOM = document.getElementById("countries-table");

// Funkcja generująca wiersz z nagłówkami
const generateRowHeader = () => {
  const row = document.createElement("tr");

  const cellName = document.createElement("th");
  const cellPopulation = document.createElement("th");
  const cellCode = document.createElement("th");

  cellName.textContent = "Kraj";
  cellPopulation.textContent = "Populacja";
  cellCode.textContent = "Flaga";

  row.appendChild(cellName);
  row.appendChild(cellPopulation);
  row.appendChild(cellCode);

  countriesTableDOM.appendChild(row);
};

// Funkcja generująca wiersze z danymi na podstawie danych z tablicy "countries"
const generateRows = () => {
  countries.forEach((country) => {
    const row = document.createElement("tr");

    const cellName = document.createElement("td");
    const cellPopulation = document.createElement("td");
    const cellCode = document.createElement("td");

    cellName.textContent = country.name;
    cellPopulation.textContent = country.population;
    cellCode.innerHTML = `<img src="https://www.countryflagicons.com/SHINY/64/${country.code}.png" />`;

    row.appendChild(cellName);
    row.appendChild(cellPopulation);
    row.appendChild(cellCode);

    countriesTableDOM.appendChild(row);
  });
};

generateRowHeader();
generateRows();
