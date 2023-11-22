import { Parallax } from "react-parallax";

/* eslint-disable react/prop-types */
const Cover = ({
  image,
  title,
  description,
  bg_color,
  text_color,
  cover_h,
  bg_opacity,
}) => {
  console.log(cover_h);
  return (
    <>
      <Parallax
        blur={{ min: 15, max: -10 }}
        bgImage={image}
        bgImageAlt="banner bg"
        strength={-200}
        className={`h-[${cover_h}px] min-h-[500px] flex justify-center items-center`}
      >
        <div className={`relative min-h-[${cover_h}] text-center text-${text_color} flex items-center justify-center bg-transparent`}>
          <div
            className={`bg-${bg_color} w-3/4 max-w-full md:min-w-[500px] p-12 px-16 bg-opacity-${
              bg_opacity ? bg_opacity : "50"
            }`}
          >
            <h2 className="text-5xl uppercase tracking-widest font-serif font-bold items-center mb-4">
              {title}
            </h2>
            <p className="font-san text-base">{description}</p>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Cover;
