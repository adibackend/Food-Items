const Buttons = ({buttonsArray,filterItems}) => {
    
  return (
   <>
   <div className="flex justify-center space-x-4">

    {buttonsArray.map((data)=>{
        return (
          <>
            <button 
              onClick={() => filterItems(data)}
              className="bg-yellow-300 px-4  py-2 rounded-md hover:bg-yellow-500 duration-200"
            >
              {data}
            </button>
          </>
        );
    })}
    </div>
   </>
  )
}
export default Buttons