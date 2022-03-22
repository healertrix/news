import Link from "next/link";
export const Article = ({ image, title, alink }) => {
  return (
    <>
      <div class="card w-full bg-base-100 shadow-xl card-normal">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{title}</h2>

          <div class="card-actions justify-end">
            <Link href={alink}>
              <a target="_blank">
                <button class="btn ">Open Article</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};