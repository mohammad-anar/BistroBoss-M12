/* eslint-disable react/prop-types */

const MenuItem = ({menu}) => {
    const {name,recipe, image,price} = menu;
    return (
        <div className="flex items-center gap-8">
            <img className="w-28 rounded-full rounded-tl-none" src={image} alt="" />
            <div className="w-full">
                <div className="flex items-center justify-between pr-4">
                    <h2 className="text-xl text-[#151515] ">{name}</h2>
                    <p className="text-xl text-[#BB8506] ">{price}</p>
                </div>
                <p className="text-base text-[#737373] ">{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;