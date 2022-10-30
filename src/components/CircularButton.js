import './style.css'
export default function CircularButton(props){
    const {title, bgColor = 'bg-blue-700', bgColorHover = 'hover:bg-blue-800', size ='py-2 px-10'} = props
     
    return(
        <button className={`text-white text-base rounded-3xl ${size} ${bgColor} ${bgColorHover}`}>
           {title}
        </button>
    )
}