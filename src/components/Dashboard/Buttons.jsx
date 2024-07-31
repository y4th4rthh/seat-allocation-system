
const Buttons = () => {
  return (
    //Design Next and Previous buttons
    <div className='flex justify-between'>
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
        Previous
      </button>
      <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded">
        Next
      </button>
    </div>
  )
}

export default Buttons