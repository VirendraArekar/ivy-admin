import { SocialIcon } from 'react-social-icons';

export default function Card(props){
    const { title, Icon, Count, Progress } = props;
    return(
        <div className="bg-white w-1/4  shadow-2xl text-center p-4 rounded-lg center mx-2">
            <h1>{title }</h1>
            <div className="py-5 flex">
            <div><SocialIcon url={`https://${Icon}.com/jaketrent`} style={{ width: "30px", height: "30px" }} /></div>
                <div className='text-center w-full'><h4 style={{ color: "#0E9D6A", fontSize: "21px", fontWeight: "600" }}>{Count}</h4></div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-1.5 rounded-full" style={{width: `${Progress}%` }}></div>
            </div>
        </div>
    )
}