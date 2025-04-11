import { Player } from "@lottiefiles/react-lottie-player";

const ResponsiveSection = ({
  heading1,
  description1,
  imgUrl1,
  altText1,
  heading2,
  description2,
  imgUrl2,
  altText2,
}) => {
  return (
    <div className=" text-white py-4 md:py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Left Box */}
        <div className=" bg-gray-900 rounded-xl p-6 lg:p-8 lg:col-span-3 flex flex-col justify-between">
          <div>
            <h2 className="text-xl md:text-2xl text-gray-200 font-bold mb-4">{heading1}</h2>
            <p className="text-gray-300 mb-4 text-lg font-light md:font-medium">
              {description1}
            </p>
          </div>
          <div>
            <img
              src={imgUrl1}
              alt={altText1}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Right Box */}
        <div className="bg-gray-900 rounded-xl p-6 lg:p-8 lg:col-span-2">
          <h2 className="text-xl md:text-2xl text-gray-200 font-bold mb-4">{heading2}</h2>
          <p className="text-gray-300 mb-4 text-lg font-light md:font-medium">
            {description2}
          </p>
          <Player autoplay loop src={imgUrl2} alt={altText2} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSection;
