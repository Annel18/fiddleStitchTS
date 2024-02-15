/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react'

export default function Grid() {

    interface Cell {
        cellIndex: number;
        logo: string | null; // Allow logo to be null
        backgroundColor: string | null; // Allow backgroundColor to be null
    }
    
    const [width, setWidth] = useState<number>(20)
    const [height, setHeight] = useState<number>(20)
    const [cells, setCells] = useState<JSX.Element[]>([])
    const [clickedCells, setClickedCells] = useState<Cell[]>([])

    useEffect(() => {
        const createGrid = () => {
            const grid: JSX.Element[] = []
            const cellSize = `${100 / width}%` // Ensure cells are square
            for (let i = 0; i < height; i++) {
                for (let j = 0; j < width; j++) {
                    const cellIndex = i * width + j
                    const cell = clickedCells.find((cell) => cell.cellIndex === cellIndex)
                    const cellLogo = cell?.logo // Get logo for this cell if it exists
                    const cellBackgroundColor = cell?.backgroundColor // Get background color for this cell if it exists
                    grid.push(
                        <div
                            key={cellIndex}
                            className="cell"
                            style={{
                                width: cellSize,
                                aspectRatio: 1,
                                border: '1px solid #000',
                                backgroundColor: cellBackgroundColor || undefined, // Apply background color if it exists
                                textAlign: 'center',
                                cursor: 'pointer',
                            }}
                            onClick={() => handleCellClick(cellIndex)} // Add onClick handler
                        >
                            {cellLogo && <img src={cellLogo} alt="svg" style={{ width: '100%', height: '100%' }} />}
                            {/* Optionally add content inside each cell */}
                        </div>
                    )
                }
            }
            setCells(grid)
        }
        
        createGrid()
    }, [width, height, clickedCells]) // Include clickedCells in the dependency array
    
    const handleCellClick = (cellIndex: number) => {
        // Find the selected logo URL from localStorage
        const logoURL = localStorage.getItem('logo')
        const cellColour = localStorage.getItem('backgroundColour') // Get the background color from localStorage
        if (logoURL || cellColour) {
            // Update clickedCells array with the new logo information for the clicked cell
            setClickedCells((prevClickedCells) => [
                ...prevClickedCells.filter((cell) => cell.cellIndex !== cellIndex), // Remove existing entry for this cell if it exists
                { cellIndex, logo: logoURL, backgroundColor: cellColour }, // Add new entry for this cell
            ])
        }
    }

    return (
        <div className="grid-container">
            {cells}
        </div>
    )
}
