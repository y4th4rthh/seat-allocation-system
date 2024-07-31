import statedata from './districts.json'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CityChoice = ({ cityChoices, setCityChoices }) => {
  const districts = statedata.districts.map((district) => district);
  const handleCityChange = (event) => {
    setCityChoices({
      ...cityChoices,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className='min-h-96'>
        <form className="mt-20">
          <p className='text-red-500 px-8 font-semibold mb-0'>Note: Your Examination center will be in one the selected city.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className='flex flex-col text-indigo-500 m-8'>
              <label className="text-lg font-bold mb-5">City Choice 1<span className="text-red-600"> *</span></label>
              <select
                className='shadow-sm rounded-md w-full px-3 py-2 border border-indigo-300 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600'
                name='firstCity'
                value={cityChoices.firstCity}
                onChange={handleCityChange}
              >
                {
                  statedata.districts.map((district, index) => (
                    <option value={district} key={index}>{district}</option>
                  ))
                }
              </select>
            </div>

            <div className='flex flex-col text-indigo-500 m-8'>
              <label className="text-lg font-bold mb-5">City Choice 2<span className="text-red-600"> *</span></label>
              <select
                className='shadow-sm rounded-md w-full px-3 py-2 border border-indigo-300 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600'
                name='secondCity'
                value={cityChoices.secondCity}
                onChange={handleCityChange}
              >
                {
                  statedata.districts.map((district, index) => (
                    <option value={district} key={index}>{district}</option>
                  ))
                }
              </select>
            </div>
          </div>
        </form>
      </div >
    </>
  )
}

export default CityChoice
