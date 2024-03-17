const MenuItem = ({ SingleItem }) => {
  return (
    <>
      <div className="flex flex-col justify-center h-full items-center  ">
        <div className="max-w-max h-full bg-yellow-100 p-4 space-y-4">
          <img
            src={SingleItem.img}
            alt="Food pic"
            className="w-[400px] rounded-xl h-[266px] object-cover"
          />
          <div>
            <div className="flex justify-between space-x-2 mb-4">
              <h4 className='font-semibold'>{SingleItem.title}</h4>
              <button className="bg-blue-300 text-white px-4 py-2 rounded-md ">
                {SingleItem.price}
              </button>
            </div>
            <p className="max-w-sm leading-7 ">{SingleItem.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default MenuItem;
