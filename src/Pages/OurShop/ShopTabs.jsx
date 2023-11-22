import OrderCard from "./OrderCard";

const ShopTabs = ({item}) => {
    return (
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {item?.map((menu) => (
            <OrderCard key={menu._id} menu={menu}></OrderCard>
          ))}
          </div>)
};

export default ShopTabs;