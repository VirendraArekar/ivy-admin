import { toast } from "react-toastify";
const permissions = JSON.parse(localStorage.getItem('permissions'));
const userType = localStorage.getItem('userType');
const toastObj = {position: toast.POSITION.TOP_RIGHT};


export const apiErrors = (errors) => {
    if(Array.isArray(errors)){
        for(var i = 0; i < errors.length ; i++){
            toast.error(errors[i].messages[0], toastObj);
        }
    }
    else{
        toast.error(errors, toastObj)
    }
    
}
export  const formatDate = (date) => {
    var d = new Date(date);
    return  (d.getDate().toString().length === 1 ? `0${d.getDate()}` : d.getDate()) + '-' + (d.getMonth().toString().length === 1 ? `0${d.getMonth() + 1}` : d.getMonth() + 1) + '-' + (d.getFullYear().toString().length === 1 ? `0${d.getFullYear()}` : d.getFullYear());
}

export const formatDatePost = (date) => {
    var d = new Date(date);
    return  (d.getFullYear().toString().length === 1 ? `0${d.getFullYear()}` : d.getFullYear()) + '-' + (d.getMonth().toString().length === 1 ? `0${d.getMonth() + 1}` : d.getMonth() + 1) + '-' + (d.getDate().toString().length === 1 ? `0${d.getDate()}` : d.getDate())  ;
}


