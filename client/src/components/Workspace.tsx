import React, { useState, useRef, ChangeEvent, FormEvent } from 'react'
import CustomGrid from './Grid'

interface GridProps {
    width: number
    height: number
}

export default function GridComponent({ width, height }: GridProps) {

    const [inputs, setInputs] = useState<{ [key: string]: string }>({})
    const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const [zoomScale, setZoomScale] = useState<number>(1)
    const workspaceRef = useRef<HTMLDivElement>(null)

    const handlePan = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (event.buttons === 4) {
            const deltaX = event.movementX
            const deltaY = event.movementY
            setPanOffset((prevOffset) => ({
                x: prevOffset.x + deltaX,
                y: prevOffset.y + deltaY,
            }))
        }
    }

    const handleZoom = (event: React.WheelEvent<HTMLDivElement>) => {
        const delta = event.deltaY
        const zoomSpeed = 0.1 // Adjust zoom speed
        const newScale = zoomScale + (delta < 0 ? -zoomSpeed : zoomSpeed) // Invert zoom direction
        setZoomScale(Math.max(0.1, newScale)) // Ensure minimum scale
        event.preventDefault()
    }

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = event.target
        setInputs((values) => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const json: { [key: string]: string } = {}

        // Convert FormDataEntryValue to string
        formData.forEach((value, key) => {
            json[key] = String(value)
        })

        setInputs(json)
    }

    return (
        <>
            {/* <Tabs /> */}
            <div id="work-space" ref={workspaceRef} onMouseMove={handlePan} onWheel={handleZoom}>
                <div style={{ transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomScale})` }}>
                    <CustomGrid width={width} height={height} />
                </div>
            </div>
            <div id="secondary-header">
                <h5 className="tab">Type your instructions</h5>
            </div>
            <form id="instruction-space" onSubmit={handleSubmit} method="POST">
                <label hidden htmlFor="instructions">instructions</label>
                <textarea name="instructions" placeholder='Type your Instructions' value={inputs.instructions || ''} onChange={handleChange} required />
            </form>
        </>
    )
}
