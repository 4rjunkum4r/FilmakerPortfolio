import Image from "next/image";

const images = [
  "/9.jpg",
  "/8.jpg",
  "/3.jpg",
  "/7.jpg",
  "/6.jpg",

];

export default function BodyOfWorks() {
  return (
    <div className="container mx-auto px-4 py-10">
      <center>
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
          MY WORKS
        </h2>
      </center>
      <br />
      <hr className="border-t-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-2 group">
            <div className="rounded-xl overflow-hidden w-full">
              <Image
                src={src}
                alt={`Photo ${index + 1}`}
                layout="responsive"
                width={400}
                height={300}
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            <div className="my-4">
              <hr className="border-t-4 border-gradient-to-r from-blue-500 via-green-500 to-yellow-500" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
