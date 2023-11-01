import { useState } from "react";

function Dropdown({ options, selected, onSelect }){
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onSelect(option);
    };

    const renderedOptions = options.map((option) =>{
        return <div onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });

    const handleClick = () => {
        setIsOpen(!isOpen);
    };
    
    let content = 'Select...';
    if (selected){
        content = selected.label;
    } 

    return <div>
        <div onClick={handleClick}>{content}</div>
        { isOpen && <div>{renderedOptions}</div>}
        </div>
}

export default Dropdown;