import CurrentStateChart from '../charts/CurrentStateChart';

function CurrentState() {

  return (
    <div className="flex flex-col bg-[#fff] p-7 w-max rounded-2xl gap-8">
      <div className='flex w-full justify-between'>
        <div className='flex items-center justify-between gap-3 text-sm'>
          <h3 className='text-[#A3A6B9]'>CURRENT STATE</h3>
          <span className='flex items-center justify-between gap-2'>All
            <img className="h-2 w-3 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" />
          </span>
        </div>
      </div>
      <div className='flex justify-center items-center gap-8'>
        <div className='flex justify-center items-center gap-5'>
          <img className="h-14 w-11 cursor-pointer" src={require('./../images/Raggruppa 3155.png')} alt="info" />
          <div className='flex flex-col justify-center items-center'>
            <span className='text-6xl font-bold'>79%</span>
            <span className='text-[#A3A6B9] text-sm'>Complated</span>
          </div>
        </div>
        <div className='h-20 border-l-2'></div>
        <div className='flex justify-center items-center gap-5'>
          <img className="h-14 w-11 cursor-pointer" src={require('./../images/Raggruppa 3001.png')} alt="info" />
          <div className='flex flex-col justify-center items-center'>
            <span className='text-6xl font-bold'>22</span>
            <span className='text-[#A3A6B9] text-sm'>DAYS TO GO</span>
          </div>
        </div>
      </div>
      <div className='flex justify-between text-xs text-[#6a6c78]'>
        <span><b className='text-[#05081d]'>Tasks</b> 36/48</span>
        <span><b className='text-[#05081d]'>Completion rate</b> -8%</span>
        <span><b className='text-[#05081d]'>Transition timeframe</b> 56 days</span>
      </div>
      <div>
        <CurrentStateChart />
      </div>
    </div>
  );
}

export default CurrentState;
