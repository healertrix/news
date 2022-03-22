export const Badge = ({text}) => {
    return (
      <>
        <button className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          {text}
        </button>
      </>
    );
}