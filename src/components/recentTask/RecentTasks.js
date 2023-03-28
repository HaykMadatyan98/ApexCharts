import { useEffect, useRef, useState } from 'react';
import { getRecentTaskData } from '../../state/getStates';
import RecentTasksElement from './RecentTaskElement';
import './recentTasks.css'

function RecentTasks() {
  const [state, setNewState] = useState();
  const [page, setPage] = useState(1);
  const pagination = useRef(null)
  const container = useRef(null)
  const maxPages = 2;

  const handleSetPage = (event) => {
    const action = event.target.dataset.value
    if ((page === 1) && (action === 'prev')) return
    if ((page === maxPages) && (action === 'next')) return
    switch (action) {
      case 'prev':
        setPage((prevPage) => --prevPage); break;
      default:
        setPage((prevPage) => ++prevPage); break;
    }
  }

  const getData = (page) => {
    const data = getRecentTaskData(page);
    setNewState(data);
    pagination.current.childNodes.forEach((element, index) => {
      if (index === page - 1) {
        element.style.backgroundColor = 'black';
      } else {
        element.style.backgroundColor = 'white';
      }
    })
  }

  useEffect(() => {
    if (state) {
      container.current.classList.add('moveRigth')
      setTimeout(() => {
        getData(page)
        container.current.classList.add('moveLeft')
        container.current.classList.remove('moveRigth')
      }, 1000)
    } else {
      getData(page)
    }
    setTimeout(() => {
      container.current.classList.remove('moveLeft')
    }, 4000)
  }, [page])

  return (
    <div className="flex flex-col bg-[#fff] p-7 w-8/12 rounded-2xl justify-between overflow-hidden">
      <div className='flex w-full justify-between'>
        <div className='flex items-center justify-between gap-3'>
          <h3 className='text-[#A3A6B9] text-sm'>RECENT TASKS TO REVIEW</h3>
          <span className='text-sm flex items-center justify-between gap-2'>All phases
            <img className="h-2 w-3 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" />
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <button onClick={handleSetPage}>
            <img className="h-3 w-2 cursor-pointer" src={require('./../images/chevron-thin-left.png')} data-value={'prev'} alt="info" />
          </button>
          <span className='text-xs'>  {page}/{maxPages}  </span>
          <button onClick={handleSetPage}>
            <img className="h-3 w-2 cursor-pointer" src={require('./../images/chevron-thin-rigth.png')} data-value={'next'} alt="info" />
          </button>
        </div>
      </div>
      <div ref={container} className='transition-all'>
        <RecentTasksElement state={state} />
      </div>
      <div className='flex justify-center items-center gap-2' ref={pagination}>
        <div className='w-2 h-2 rounded-full bg-[#000] border-[#000] border border-solid' onClick={handleSetPage} data-value="prev"></div>
        <div className='w-2 h-2 rounded-full bg-[#fff] border-[#000] border border-solid' onClick={handleSetPage} data-value="next"></div>
      </div>
    </div>
  );
}

export default RecentTasks;
