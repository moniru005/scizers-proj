import { useState } from "react";
import UserCard from "./UserCard";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrenPage] = useState(1);

  useState(() => {
    fetch("https://swapi.dev/api/people")
      .then((res) => res.json())
      .then((data) => setUsers(data.results));
  }, []);
  console.log(users);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filter based on user name
  const filterUser = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const cardsPerPage = 3;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filterUser.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrenPage(pageNumber);

  return (
    <>
      {/* Search */}
      <div className="px-4 pt-12 pb-6 w-full">
        <input
          onChange={handleSearch}
          value={search}
          className="p-4 border border-slate-700 w-full text-center focus:outline-none text-xl"
          type="text"
          name="search"
          placeholder="Search by User Name"
        />
      </div>

      {/* Display Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-6 justify-items-center">
        {currentCards.map((user, index) => (
          <UserCard key={index} user={user}></UserCard>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {Array.from({
          length: Math.ceil(filterUser.length / cardsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-3 py-1 bg-gray-300 rounded-md ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Users;
