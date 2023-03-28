function Sidebar() {
  return (
    <div className="sidebar inset-0 bg-[#05081D] flex justify-between items-center flex-col w-24 h-screen fixed py-10">
      <img className="w-12 h-10 cursor-pointer" src={require('./../images/Raggruppa 2913.png')} alt="logo" />
      <div className="w-full flex justify-center items-center flex-col gap-7 h-72">
        <div className='flex justify-center items-center w-full cursor-pointer h-24 border-[#43bccd] border-solid border-r-8'><img className="w-6 h-5" src={require('./../images/Raggruppa 2732.png')} alt="home" /></div>
        <div className='flex justify-center items-center w-full cursor-pointer h-24'><img className="w-6 h-5" src={require('./../images/Raggruppa 2733.png')} alt="ref" /></div>
        <div className='flex justify-center items-center w-full cursor-pointer h-24'><img className="w-6 h-5" src={require('./../images/Raggruppa 2736.png')} alt="faq" /></div>
      </div>
      <img className="cursor-pointer w-14 h-14" src={require('./../images/Raggruppa 2734.png')} alt="add" />
    </div>
  );
}

export default Sidebar;
