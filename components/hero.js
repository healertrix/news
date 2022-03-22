import Image from "next/image";

export const Hero = ({ title, content, src }) => {
    
  return (
    <>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={src} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">{title}</h1>
            <p class="py-6">{content}</p>
            <button class="btn btn-primary">Open Article !!</button>
          </div>
        </div>
      </div>
    </>
  );
};
