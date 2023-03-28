function AddNewTask() {
  return (
    <div className="addNewTask bg-[#fff] text-[#ffffff] w-full flex justify-between items-center mt-10 px-10 h-28 rounded-lg">
      <img className="h-10 w-8" src={require('./../images/Raggruppa 2999.png')} alt="info" />
      <div>
        <h3 className='text-2xl text-[#05081D]'>Transition ready to be concluded</h3>
        <span className='text-xs text-[#a3a6b9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</span>
      </div>
      <button className='bg-[#2b0f4d] rounded-2xl w-440px h-12'>ADD OTHER TASKS</button>
      <button className='bg-[#f53361] rounded-2xl w-440px h-12'>CONCLUDE TRANSITION</button>
    </div>
  );
}

export default AddNewTask;
