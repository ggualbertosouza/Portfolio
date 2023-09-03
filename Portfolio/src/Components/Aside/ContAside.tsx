// React icons Packages
import {BiDownArrow, BiRightArrow} from 'react-icons/bi'

// React Packages
import {useState} from 'react'

export default function ContAside(){
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return(
        <div>
            <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex gap-2 items-center text-primary pl-2 sm">
                {isOpen ? <BiRightArrow /> : <BiDownArrow />}
                contacts
                </button>
            <ul className={`${isOpen ? 'opacity-0' : 'opacity-1'} duration-300`}>
                <li className='text-sm pl-6'>contatoguilhermegsz@gmail.com</li>
                <li className='text-sm pl-6'>+55 33 98419-5210</li>
            </ul>
        </div>
    )
}