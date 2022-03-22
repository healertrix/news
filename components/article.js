import Link from "next/link";
export const Article = ({ image, title, alink }) => {
  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl card-normal">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>

          <div className="card-actions justify-end">
            <Link href={alink}>
              <a target="_blank">
                <button className="btn ">Open Article</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};