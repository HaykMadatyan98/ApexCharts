function UserElement({ name, role, status, color, id, height, handleHideInfo }) {

  return (
    <div className={`w-full rounded-lg shadow-3xl border-l-8 transition-all overflow-hidden px-14`} style={{ "borderColor": color, "height": height }}>
      <div className='flex h-20 justify-between items-center'>
        <div className='w-1/4 flex justify-start items-center gap-5'>
          <h3 className='text-[#05081d] w-max text-xl font-bold w-1/4'>{name}</h3>
          {name === "UI/UX Designer" ? <img className="h-7 w-5" src={require('./../images/Raggruppa 2999.png')} alt="info" /> : true}
        </div>
        <div className='w-1/4'>
          <p className='text-[#a3a6b9] text-xs'>MY ROLE</p>
          <p className='text-sm'>{role}</p>
        </div>
        <div className='w-1/4'>
          <p className='text-[#a3a6b9] text-xs'>STATUS</p>
          <p className={`w-56 rounded-2xl text-white text-center`} style={{ backgroundColor: color }}>{status}</p>
        </div>
        <div className='w-1/4'>
          <p className='text-[#a3a6b9] text-xs'>DAYS TO GO</p>
          <p className='text-sm'>26</p>
        </div>
        <div className='flex justify-between items-center w-20'>
          <div className='flex justify-between items-center gap-2'>
            <p className='text-xs'>15</p>
            <img className="h-4 w-4 cursor-pointer" src={require('./../images/Tracciato 1301.png')} alt="info" />
          </div>
          <img className="h-3 w-5 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" id={id} onClick={handleHideInfo} />
        </div>
      </div>
      <hr />
      <div className='text-sm flex justify-between mt-5 pb-10 gap-3'>
        <div className='w-full flex justify-around flex-col'>
          <div className='w-full'>
            <div className='flex justify-around'>
              <div className='w-1/4'>
                <p className='text-[#a3a6b9]'>CREATOR</p>
                <p className='font-bold'>John Adams</p>
              </div>
              <div className='w-1/4'>
                <p className='text-[#a3a6b9]'>COLLOBORATOR(S)</p>
                <p className='font-bold'>Nishant Mehra | Lu Shih</p>
              </div>
              <div className='w-1/4'>
                <p className='text-[#a3a6b9]'>TRANSITOR</p>
                <p className='font-bold'>Sammy Jo</p>
              </div>
              <div className='w-1/4'>
                <p className='text-[#a3a6b9]'>TRANSITEE(S)</p>
                <p className='font-bold'>Vladimir Nikolsky</p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ "color": color }} className="flex w-full">
              <span className='w-1/6'>COMPENTATION PERCENTAGE</span>
              <div className='w-10/12 rounded-full' style={{ "backgroundColor": color }}></div>
            </div>
          </div>
          <div className='w-full'>
            <div className='flex justify-around'>
              <div className='w-1/4'>
                <p className='text-[#a3a6b9]'>TASKS</p>
                <p className='font-bold'>26</p>
              </div>
              <div className='w-1/4'>
                <p className='text-[#a3a6b9]'>KNOWLEDGE TRANSEFER</p>
                <p className='font-bold'>12</p>
              </div>
              <div className='w-1/4'>
                <p className='text-[#a3a6b9]'>PRODUCTION PARALLEL</p>
                <p className='font-bold'>6</p>
              </div>
              <div className='w-1/4'>
                <p className='text-[#a3a6b9]'>LIVE EXECUTION</p>
                <p className='font-bold'>N/A</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-1'>
          <img className="h-14 w-14 cursor-pointer" src={require('./../images/Raggruppa 3178.png')} alt="info" />
          <img className="h-14 w-14 cursor-pointer" src={require('./../images/Raggruppa 3179.png')} alt="info" />
          <img className="h-14 w-14 cursor-pointer" src={require('./../images/Raggruppa 3180.png')} alt="info" />
        </div>
      </div>
    </div>
  );
}

export default UserElement;
