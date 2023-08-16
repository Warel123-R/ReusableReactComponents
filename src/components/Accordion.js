import {useState} from 'react';
import {GoChevronDown, GoChevronLeft} from 'react-icons/go';

function Accordion ({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) =>{
        setExpandedIndex((currentexpandedindex)=>{
            if(currentexpandedindex===nextIndex){
                return -1;
            }
            else{
                return nextIndex;
            }
        });
    };

    const rendereditems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;
        
        const icon = <span className="text-2xl">
            {isExpanded ? <GoChevronDown></GoChevronDown>: <GoChevronLeft></GoChevronLeft>}
        </span>
        
        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={()=>handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        );
    });
    return(
        <div className="border-x border-t rounded">
            {rendereditems}
        </div>
    );
}
export default Accordion;