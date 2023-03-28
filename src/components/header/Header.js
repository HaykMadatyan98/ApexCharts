import { getTotals } from '../../state/getStates';

function Header() {
  const state = getTotals()

  return (
    <div className="flex flex-col justify-right items-end mb-11">
      <div className='flex justify-around items-center h-16 w-32'>
        <img className="h-7 w-6" src={require('./../images/Raggruppa 2731.png')} alt="note" />
        <div className="flex -space-x-2 overflow-hidden">
          <img
            className="h-12 w-12 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
      <div className='text-left flex justify-between w-full'>
        <div>
          <span className='w-44 h-5 text-[#6D32A5] uppercase'>Dashboard</span>
          <h2 className='font-monospace text-[#05081D] text-6xl'>Instights</h2>
        </div>
        <div className='w-7/12 flex justify-center items-end gap-12 text-base text-[#a3a6b9] text-left'>
          <div className='w-full'>
            <div className='flex justify-start items-center gap-2'>
              <span className='w-max uppercase '>Total transitions</span>
            </div>
            <h3 className='text-[#05081D] text-3xl font-roboto'>{state.TOTAL_TRANSICTIONS}</h3>
          </div>
          <div className='w-full'>
            <div className='flex justify-start items-center gap-2'>
            <span className='w-max uppercase'>Initiated</span>
              <img className="h-3 w-3" src={require('./../images/circle-info.png')} alt="info" />
            </div>
            <h3 className='text-[#05081D] text-3xl font-roboto'>{state.INITIATED}</h3>
          </div>
          <div className='w-full'>
            <div className='flex justify-start items-center gap-2'>
            <span className='w-max uppercase'>In progress</span>
              <img className="h-3 w-3" src={require('./../images/circle-info.png')} alt="info" />
            </div>
            <h3 className='text-[#05081D] text-3xl font-roboto'>{state.IN_PROGRESS}</h3>
          </div>
          <div className='w-full'>
            <div className='flex justify-start items-center gap-2'>
            <span className='w-max uppercase'>Complated</span>
              <img className="h-3 w-3" src={require('./../images/circle-info.png')} alt="info" />
            </div>
            <h3 className='text-[#05081D] text-3xl font-roboto'>{state.COMPLATED}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
