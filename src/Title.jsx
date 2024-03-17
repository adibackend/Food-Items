const Title = ({ text }) => {
  return (
    <>
      <div className="text-center my-8  ">
        <h2 className="text-5xl font-medium  ">{text}</h2>
        <div className="flex justify-center">

        <h2 className="underline bg-yellow-600 w-[7rem] h-[0.25rem]  mt-4"> </h2>
        </div>
      </div>
    </>
  );
};

export default Title;
