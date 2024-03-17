import MenuItem from './MenuItem';

const Menu = ({ items }) => {
    return (
        <>
      <div>
       
        <div className="m-4 p-4 grid md:grid-cols-3 md:max-w-6xl w-[90vw]  gap-4 grid-cols-1 mx-auto ">
          {items.map((data) => {
            return (
              <>
                <MenuItem key={data.id} SingleItem={data} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Menu;
