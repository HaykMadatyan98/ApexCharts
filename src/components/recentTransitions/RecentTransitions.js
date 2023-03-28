import { useEffect, useState } from 'react';
import UserElement from './UserElement';

function RecentTransitions() {
  const [openedElement, setOpenedElement] = useState(0)
  const [state, setState] = useState([
    {
      id: 1,
      name: 'UI/UX Designer',
      status: 'READY TO BE CONCLUDED',
      role: 'Creator',
      color: '#f53361',
      height: 80
    },
    {
      id: 2,
      name: 'Tech Lead',
      status: 'PRODUCTION PARALLEL',
      role: 'Transitor',
      color: '#6d32a5',
      height: 80
    },
    {
      id: 3,
      name: 'HR Manager',
      status: 'KNOWLEDGE TRANSEFER',
      role: 'Transitor',
      color: '#43bccd',
      height: 80
    }
  ]
  )

  useEffect(() => {
    setState(prevValue => prevValue.map((item) => {
      if (item.id === openedElement) {
        item.height = 300
      } else {
        item.height = 80
      }
      return item
    }))
  }, [openedElement])

  const handleHideInfo = (event) => {
    if (openedElement === +event.target.id) {
      setOpenedElement(0)
    } else {
      setOpenedElement(+event.target.id)
    }
  }

  return (
    <div className="flex flex-col bg-[#fff] gap-3.5 p-7 w-full rounded-2x ">
      <div className='flex w-full justify-between pt-3 pl-5 mb-5'>
        <div className='flex items-center justify-between gap-3'>
          <h3 className='text-[#A3A6B9] text-sm'>RECENT TRANSITIONS</h3>
          <span className='text-sm flex items-center justify-between gap-2'>All
            <img className="h-2 w-3 cursor-pointer" src={require('./../images/chevron-thin-down.png')} alt="info" />
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='text-xs text-[#05081d]'>Hide completed</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked readOnly />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#6d32a5]"></div>
          </label>
        </div>
      </div>
      {state.map((element) => <UserElement key={element.id} id={element.id} name={element.name} status={element.status} role={element.role} color={element.color} height={element.height} handleHideInfo={handleHideInfo} />)}
    </div>
  );
}

export default RecentTransitions;
