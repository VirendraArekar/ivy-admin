import { MdEdit } from 'react-icons/md'
import './style.css'
export default function Button(props){
    const {title, bgColor = 'bg-blue-700', bgColorHover = 'hover:bg-blue-800', size ='py-2 px-10', shadow='drop-shadow-lg'} = props
     
    return(
        <button className={`text-white text-sm rounded ${size} ${bgColor} ${bgColorHover} ${shadow}`}>
        {title}
        </button>
    )
}