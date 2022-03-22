import Image from "next/image";

export const Hero = ({ title, content, src }) => {
    
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={src}
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
                      <p className="py-6">{ content}</p>
            <button className="btn btn-primary">Open Article !!</button>
          </div>
        </div>
      </div>
    </>
  );
};
