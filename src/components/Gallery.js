import { artworks } from "../artworks.js";

export default function Gallery() {
  return (
    <section className="text-slate-500 body-font items-center">
        <div className="container px-5 py-10 mx-auto lg:px-20">
            <h1 className="text-slate-800 mb-10 text-2xl md:text-4xl font-semibold">
                Some Fun Stuff!
            </h1>
            <div className="mx-auto justify-center flex flex-wrap -m-4">
            {artworks.map((artwork) => (
                <div
                className="md:w-1/3 sm:w-1/2 w-5/6 sm:p-8 p-6">
                    <div className="aspect-square p-3 flex relative rounded-lg drop-shadow-lg bg-gradient-to-r from-blue-200 to-pink-100 opacity-80">
                        <img
                        alt="project-img"
                        className="p-4 absolute inset-0 w-full h-full object-scale-down object-center"
                        src={require("../assets/" + artwork.image)}
                        />
                        <div className="flex justify-center items-center text-center px-8 py-10 relative z-10 w-full bg-white opacity-0 hover:opacity-95 hover:duration-500">
                            <h1 className="text-3xl align-middle font-normal mb-3">
                                {artwork.title}
                            </h1>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </section>
  );
}