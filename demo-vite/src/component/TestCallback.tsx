import { useState } from "react"
import "../App.css"
import Callback from "./Callback";

export default function TestCallback() {
    const [UIcolor, setUIColor] = useState(null)

    const getColor = (color: any) => {
        setUIColor(color);
    }

    return (
        <div className="App">
            <div className="App_color_container"
                style={{background: `${UIcolor}`, height:"100px", border: "1px solid", borderRadius: "10px", marginBottom: "10px"}}
            >Type the name of the color below! </div>
            <Callback getColor={getColor}/>
        </div>
    )
}