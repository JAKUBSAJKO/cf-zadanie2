import PaginatedTable from "./components/PaginatedTable";
import Pagination from "./components/Pagination";
import { usePagination } from "./hooks/usePagination";

const data = [
  {
    id: "496cc5e7-5ed1-4938-bedc-a7e9d81f9de0",
    firstName: "Bret",
    lastName: "Copcote",
    city: "Duszniki-Zdrój",
  },
  {
    id: "891500fa-f0c2-4436-9acb-f9e6a5e9da87",
    firstName: "Elise",
    lastName: "Willan",
    city: "Ciudad Sandino",
  },
  {
    id: "40a1372c-5e5f-4372-92e7-4f4c1aea0385",
    firstName: "Elva",
    lastName: "Jansik",
    city: "Carot",
  },
  {
    id: "04db0a58-70ca-4c41-ae96-70612f972044",
    firstName: "Julee",
    lastName: "Boullin",
    city: "Xinzheng",
  },
  {
    id: "31de0ad1-4b57-41eb-b448-f2457b288f15",
    firstName: "Zachary",
    lastName: "Jost",
    city: "Tegalagung",
  },
  {
    id: "611194b2-0f7b-480e-9498-36a151b2d64d",
    firstName: "Edgardo",
    lastName: "Meddings",
    city: "Tuojiang",
  },
  {
    id: "6ff4ef3d-69c1-49cb-8f6c-ce28ea3e826e",
    firstName: "Valentijn",
    lastName: "Ackland",
    city: "Denpasar",
  },
  {
    id: "d4dbbd7d-5088-4c29-9652-2dd5c51153fa",
    firstName: "Scotty",
    lastName: "Coney",
    city: "Nagbukel",
  },
  {
    id: "398c2f61-df43-4afe-95bc-5bf558eaefdf",
    firstName: "Danit",
    lastName: "Checchi",
    city: "Vedène",
  },
  {
    id: "1c214bd6-4582-485f-a05f-0681aeac123f",
    firstName: "Tailor",
    lastName: "Seedman",
    city: "Bayan",
  },
  {
    id: "37884fd5-3857-4eaf-b152-0803ba4a2495",
    firstName: "Kristi",
    lastName: "Belloch",
    city: "Protaras",
  },
  {
    id: "addb0eff-9461-4740-bc3c-63bd389e2fc7",
    firstName: "Flem",
    lastName: "Duxbury",
    city: "Ojo de Agua",
  },
  {
    id: "e00bca59-68c9-40f0-bbc2-4380f97b03f2",
    firstName: "Kincaid",
    lastName: "Abbie",
    city: "Itajuípe",
  },
  {
    id: "7ea717ff-66f5-40e5-a49d-685c661eb194",
    firstName: "Brinna",
    lastName: "Carles",
    city: "Navashino",
  },
  {
    id: "923c0b40-a291-4790-a39b-a748dc541d72",
    firstName: "Annalise",
    lastName: "Domniney",
    city: "Kotli Lohārān",
  },
  {
    id: "d40a3890-4abe-4cdd-a9d1-4ef73f52d3e0",
    firstName: "Giffer",
    lastName: "Hancock",
    city: "Ilembula",
  },
  {
    id: "c5ed1e15-bfc5-4330-b600-ae495d831817",
    firstName: "Sherri",
    lastName: "Moatt",
    city: "Pingle",
  },
  {
    id: "854fb36e-0b26-41aa-bea8-ba0d4928d315",
    firstName: "Danielle",
    lastName: "Yallowley",
    city: "Rosmaninhal",
  },
  {
    id: "51dcc858-3735-49a7-b469-5ce4a4d4593e",
    firstName: "Latisha",
    lastName: "Gallafant",
    city: "Xiangshui",
  },
  {
    id: "d2a0416a-a0d5-4234-82c0-31fa3075a708",
    firstName: "Scotty",
    lastName: "Moneti",
    city: "Masipi West",
  },
];

const columns = ["id", "first name", "last name", "city"];

function App() {
  const [
    { actualPageIdx, lastPageIdx, entriesOnSelectedPage },
    { goToFirstPage, goToPrevPage, goToNextPage, goToLastPage },
  ] = usePagination(data);

  const paginationState = { actualPageIdx, lastPageIdx, entriesOnSelectedPage };
  const paginationActions = {
    goToFirstPage,
    goToPrevPage,
    goToNextPage,
    goToLastPage,
  };

  const dataEntries = {
    columns,
    data,
  };

  return (
    <div className="container">
      <PaginatedTable dataEntries={dataEntries} />
      <Pagination />
    </div>
  );
}

export default App;
