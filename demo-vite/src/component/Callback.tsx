import React, {useState}from "react";

const Callback = ({getColor} : any) => {
    const [activeColor, setActiveColor] = useState('')

    const handleChange = (e: any) => {
        const {value} = e.target;
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