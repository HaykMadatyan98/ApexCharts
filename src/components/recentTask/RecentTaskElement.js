function RecentTasksElement({ state }) {

    return (
        <div className={`w-full h-56 rounded-lg shadow-4xl flex flex-col justify-between px-10 mt-6 p-7 transition-all`} >
            <div className='flex justify-between text-sm font-bold'>
                <span className='text-[#43bccd]'>{state?.date}</span>
                <span>{state?.creator}</span>
            </div>
            <h3 className='text-xl font-bold'>{state?.title}</h3>
            <div className='flex'>
                <div className='text-xs w-11/12'>
                    <h5 className='text-[#43bccd]'>{state?.name}</h5>
                    <p className='text-[#a3a6b9]'>{state?.text}</p>
                </div>
                <div className='flex justify-between gap-1'>
                    <img className="h-14 w-14 cursor-pointer" src={require('./../images/Raggruppa 2971.png')} alt="info" />
                    <img className="h-14 w-14 cursor-pointer" src={require('./../images/Raggruppa 2972.png')} alt="info" />
                </div>
            </div>
            <div className='flex justify-start gap-5 text-xs'>
                <span className='flex items-center gap-2'>
                    <img className="h-4 w-4 cursor-pointer" src={require('./../images/Raggruppa 2919.png')} alt="info" /> {state?.commentsTotal} comments
                </span>
                <span className='flex items-center gap-2'>
                    <img className="h-4 w-4 cursor-pointer" src={require('./../images/paperclip.png')} alt="info" /> {state?.attachmentsTotal} attachments
                </span>
                <span className='flex items-center gap-2'>
                    <img className="h-4 w-4 cursor-pointer" src={require('./../images/Raggruppa 2977.png')} alt="info" /> {state?.priority} priority
                </span>
                <span className='flex items-center gap-2'>
                    <img className="h-4 w-4 cursor-pointer" src={require('./../images/Raggruppa 2979.png')} alt="info" /> {state?.criticality} criticality
                </span>
            </div>
        </div>
    );
}

export default RecentTasksElement;