/* eslint-disable react/prop-types */
const SectionHeading = ({subTitle, title}) => {
  return (
    <div className="text-center max-w-[400px] mx-auto my-5" >
      <h3 className="text-lg font-normal mb-2 text-[#D99904]">
        ---{subTitle}---
      </h3>
      <h2 className="text-4xl  uppercase font-bold border-y-4 border-gray-300 py-4 mt-2 ">{title}</h2>
    </div>
  );
};

export default SectionHeading;
