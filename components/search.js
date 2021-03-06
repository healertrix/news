export const SearchBar = () => {
    return (
      <>
        <div class="flex justify-center w-full m-10">
          <div class="relative w-3/4 ">
            <input
              type="text"
              placeholder="Search news here ...."
              class="input input-bordered w-full pr-full"
            />
            <button class="btn btn-ghost absolute top-0 right-0 rounded-l-none">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                class="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </>
    );
}