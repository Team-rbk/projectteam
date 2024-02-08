import React ,{useState} from "react"

const  App=()=>{
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearch = () => {
    // Implement your search logic here
    console.log(`Searching for: ${searchValue}`);
  };
  return (
    <div className="flex flex-col items-start w-full font-inter p-3">
      <div className="flex flex-row justify-between w-full items-start">
        <div className="flex flex-row gap-4 items-center">
          <div className="text-3xl text-green-700">Work</div>
          <div className="text-sm">Jobs</div>
          <div id="Jobs1" className="text-sm">
            worker
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex items-center bg-gray-300 rounded-full px-4 h-12 w-full max-w-md">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="search"
              className="bg-transparent outline-none w-full"
            />
          </div>
          <img
            src="https://file.rendit.io/n/v0GdszGfxFWCf6W5Uykj.svg"
            alt="profile"
            id="Ellipse"
            className="w-12 h-12 rounded-full"
            onClick={handleSearch}
          />
        </div>
      </div>
      <div id="Line" className="border-t border-black w-full my-3" />
    </div>
  );
}
export default App;