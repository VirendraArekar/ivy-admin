import React from 'react'
import { Multiselect } from 'multiselect-react-dropdown'

function MultiSelect({label , onSelect , value}) {
    const data = [
        { Country: "India", id: 1 },
        { Country: "America", id: 2 },
        { Country: "France", id: 3 },
        { Country: "Germany", id: 4 },
    ]
    
    return (
        <div>
           {label && <label className='block text-gray-700  text-sm font-bold mb-2'>{label}</label>}
            <Multiselect
                className="shadow appearance-none w-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                options={data}
                displayValue="Country"
                style={{
                    searchBox:{
                        paddingLeft:"10px",
                        paddingRight:"10px",
                        width: '50%',
                        
                    }
                }}
                onSelect ={(e)=> onSelect(e)}
                value={value}
                avoidHighlightFirstOption
            />
        </div>
    )
}

export default MultiSelect