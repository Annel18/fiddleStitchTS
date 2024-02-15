import { useState } from 'react'
import { ColorPicker, useColor } from 'react-color-palette'
import { IColor } from 'react-color-palette'
import "react-color-palette/css"

import Array from '../assets/toolBoxIcon/Array.svg'
import ArrowSelect from '../assets/toolBoxIcon/ArrowSelect.svg'
import Colour from '../assets/toolBoxIcon/Colour.svg'
import Comment from '../assets/toolBoxIcon/Comment.svg'
import Copy from '../assets/toolBoxIcon/Copy.svg'
import Group from '../assets/toolBoxIcon/Group.svg'
import Lock from '../assets/toolBoxIcon/Lock.svg'
import MirrorCopy from '../assets/toolBoxIcon/MirrorCopy.svg'
import Mirror from '../assets/toolBoxIcon/Mirror.svg'
import Move from '../assets/toolBoxIcon/Move.svg'
import Pan from '../assets/toolBoxIcon/Pan.svg'
import Rotate from '../assets/toolBoxIcon/Rotate.svg'
import Scale from '../assets/toolBoxIcon/Scale.svg'
import Text from '../assets/toolBoxIcon/Text.svg'
import Ungroup from '../assets/toolBoxIcon/Ungroup.svg'
import Unlock from '../assets/toolBoxIcon/Unlock.svg'
import ZoomIn from '../assets/toolBoxIcon/ZoomIn.svg'
import ZoomOut from '../assets/toolBoxIcon/ZoomOut.svg'


export default function ToolBox() {

    const toolBox = [
        { title: 'Pan', icon: Pan },
        { title: 'Select', icon: ArrowSelect },
        { title: 'Move', icon: Move },
        { title: 'Rotate', icon: Rotate },
        { title: 'Copy', icon: Copy },
        { title: 'Mirror', icon: Mirror },
        { title: 'Mirror Copy', icon: MirrorCopy },
        { title: 'Array', icon: Array },
        { title: 'Scale', icon: Scale },
        { title: 'Text', icon: Text },
        { title: 'Colour', icon: Colour },
        { title: 'Group', icon: Group },
        { title: 'Ungroup', icon: Ungroup },
        { title: 'Lock', icon: Lock },
        { title: 'Unlock', icon: Unlock },
        { title: 'ZoomIn', icon: ZoomIn },
        { title: 'ZoomOut', icon: ZoomOut },
        { title: 'Comment', icon: Comment },
    ]
    const [showColorPicker, setShowColorPicker] = useState(false);
    const [color, setColor] = useColor('#fff')

    function handleColorChange(newColor: IColor) {
        setColor(newColor);
        localStorage.setItem("backgroundColour", newColor.hex); // Save the selected color to localStorage
    }

    function handleClick(tool: { title: string }) {
        if (tool.title === 'Colour') {
            // Show the ColorPicker component
            setShowColorPicker(true);
        } else {
            // Hide the ColorPicker component and remove background color from localStorage
            setShowColorPicker(false);
            localStorage.removeItem("backgroundColour");
        }
    }

    return (
        <section id="primary-header">
            <div className="hamburgerMenu">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="toolBox">
                {toolBox.map((tool, i) => (
                    <button className="tool" key={i} onClick={() => handleClick(tool)}>
                        <img className="toolBoxIcon" src={tool.icon} alt={tool.title} title={tool.title} />
                        <p className="toolBoxTitle">{tool.title}</p>
                    </button>
                ))}
            </div>
            <div className='colorModal'>
                {showColorPicker && (
                    <ColorPicker
                        color={color}
                        onChange={handleColorChange}
                    />
                )}
            </div>
        </section>
    )
}
