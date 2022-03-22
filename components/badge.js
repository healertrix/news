export const Badge = ({text}) => {
    return (
      <>
        <button class="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          {text}
        </button>
      </>
    );
}