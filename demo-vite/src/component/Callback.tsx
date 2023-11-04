import React, {useState}from "react";

const Callback = ({getColor} : any) => {
    const [activeColor, setActiveColor] = useState('')

    const handleChange = (e: any) => {
        const {value} = e.target; // this method return tupple that has many data pair so we must use {} to take 1 value
        setActiveColor(value);
        getColor(value);
    };

    return (
        <input
            type = "text"
            id = "input"
            aria-label="input"
            onChange={handleChange}
            value = {activeColor}
        />
    );
};

export default Callback