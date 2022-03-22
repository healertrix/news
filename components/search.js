export const SearchBar = () => {
    return (
      <>
        <div className="flex justify-center w-full m-10">
          <div className="relative w-3/4 ">
            <input
              type="text"
              placeholder="Search news here ...."
              className="input input-bordered w-full pr-full"
            />
            <button className="btn btn-ghost absolute top-0 right-0 rounded-l-none">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </>
    );
}