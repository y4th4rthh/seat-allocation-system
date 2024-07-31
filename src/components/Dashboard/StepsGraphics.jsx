const StepsGraphics = () => {
  return (
    <div className="p-2 flex flex-row shadow-sm rounded-xl shadow-indigo-500 justify-center items-center">
      <div className="rounded-full bg-indigo-500 hover:bg-indigo-600 text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center p-2 m-2">
        1
      </div>
      <div className="w-1  sm:w-24 md:w-48 lg:w-96 h-1 bg-indigo-500  flex self-center m-2"></div>
      <div className="rounded-full bg-indigo-500 hover:bg-indigo-600 text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center p-2 m-2">
        2
      </div>
      <div className="w-1  sm:w-24 md:w-48 lg:w-96 h-1 bg-indigo-500   flex self-center m-2"></div>
      <div className="rounded-full bg-indigo-500 hover:bg-indigo-600 text-white w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center p-2 m-2">
        3
      </div>
    </div>
  );
};
export default StepsGraphics;
