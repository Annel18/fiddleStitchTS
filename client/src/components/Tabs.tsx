import { useState } from "react"
import Modal from "react-modal"
import Workspace from "./Workspace"

export default function Tabs() {
    const [openGridSettings, setOpenGridSettings] = useState(false)
    const [width, setWidth] = useState<number>(20)
    const [height, setHeight] = useState<number>(20)

    function handleClick() {
        setOpenGridSettings(!openGridSettings)
    }


    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            columns: { value: number }
            rows: { value: number }
        }
        setWidth(target.columns.value)
        setHeight(target.rows.value)
    }

return (
    <section id="hero">
        <div id="secondary-header">
            <button
                className="tab"
                onClick={handleClick}
            >
                <h5>
                    Knitting Grid
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiA4LjY2NmMtMS44MzggMC0zLjMzMyAxLjQ5Ni0zLjMzMyAzLjMzNHMxLjQ5NSAzLjMzMyAzLjMzMyAzLjMzMyAzLjMzMy0xLjQ5NSAzLjMzMy0zLjMzMy0xLjQ5NS0zLjMzNC0zLjMzMy0zLjMzNG0wIDcuNjY3Yy0yLjM5IDAtNC4zMzMtMS45NDMtNC4zMzMtNC4zMzNzMS45NDMtNC4zMzQgNC4zMzMtNC4zMzQgNC4zMzMgMS45NDQgNC4zMzMgNC4zMzRjMCAyLjM5LTEuOTQzIDQuMzMzLTQuMzMzIDQuMzMzbS0xLjE5MyA2LjY2N2gyLjM4NmMuMzc5LTEuMTA0LjY2OC0yLjQ1MSAyLjEwNy0zLjA1IDEuNDk2LS42MTcgMi42NjYuMTk2IDMuNjM1LjY3MmwxLjY4Ni0xLjY4OGMtLjUwOC0xLjA0Ny0xLjI2Ni0yLjE5OS0uNjY5LTMuNjQxLjU2Ny0xLjM2OSAxLjczOS0xLjY2MyAzLjA0OC0yLjA5OXYtMi4zODhjLTEuMjM1LS40MjEtMi40NzEtLjcwOC0zLjA0Ny0yLjA5OC0uNTcyLTEuMzguMDU3LTIuMzk1LjY2OS0zLjY0M2wtMS42ODctMS42ODZjLTEuMTE3LjU0Ny0yLjIyMSAxLjI1Ny0zLjY0Mi42NjgtMS4zNzQtLjU3MS0xLjY1Ni0xLjczNC0yLjEtMy4wNDdoLTIuMzg2Yy0uNDI0IDEuMjMxLS43MDQgMi40NjgtMi4wOTkgMy4wNDYtLjM2NS4xNTMtLjcxOC4yMjYtMS4wNzcuMjI2LS44NDMgMC0xLjUzOS0uMzkyLTIuNTY2LS44OTNsLTEuNjg3IDEuNjg2Yy41NzQgMS4xNzUgMS4yNTEgMi4yMzcuNjY5IDMuNjQzLS41NzEgMS4zNzUtMS43MzQgMS42NTQtMy4wNDcgMi4wOTh2Mi4zODhjMS4yMjYuNDE4IDIuNDY4LjcwNSAzLjA0NyAyLjA5OC41ODEgMS40MDMtLjA3NSAyLjQzMi0uNjY5IDMuNjQzbDEuNjg3IDEuNjg3YzEuNDUtLjcyNSAyLjM1NS0xLjIwNCAzLjY0Mi0uNjY5IDEuMzc4LjU3MiAxLjY1NSAxLjczOCAyLjEgMy4wNDdtMy4wOTQgMWgtMy44MDNjLS42ODEtMS45MTgtLjc4NS0yLjcxMy0xLjc3My0zLjEyMy0xLjAwNS0uNDE5LTEuNzMxLjEzMi0zLjQ2Ni45NTJsLTIuNjg5LTIuNjg5Yy44NzMtMS44MzcgMS4zNjctMi40NjUuOTUzLTMuNDY1LS40MTItLjk5MS0xLjE5Mi0xLjA4Ny0zLjEyMy0xLjc3M3YtMy44MDRjMS45MDYtLjY3OCAyLjcxMi0uNzgyIDMuMTIzLTEuNzczLjQxMS0uOTkxLS4wNzEtMS42MTMtLjk1My0zLjQ2NmwyLjY4OS0yLjY4OGMxLjc0MS44MjggMi40NjYgMS4zNjUgMy40NjUuOTUzLjk5Mi0uNDEyIDEuMDgyLTEuMTg1IDEuNzc1LTMuMTI0aDMuODAyYy42ODIgMS45MTguNzg4IDIuNzE0IDEuNzc0IDMuMTIzIDEuMDAxLjQxNiAxLjcwOS0uMTE5IDMuNDY3LS45NTJsMi42ODcgMi42ODhjLS44NzggMS44NDctMS4zNjEgMi40NzctLjk1MiAzLjQ2NS40MTEuOTkyIDEuMTkyIDEuMDg3IDMuMTIzIDEuNzc0djMuODA1Yy0xLjkwNi42NzctMi43MTMuNzgyLTMuMTI0IDEuNzczLS40MDMuOTc1LjA0NCAxLjU2MS45NTQgMy40NjRsLTIuNjg4IDIuNjg5Yy0xLjcyOC0uODItMi40NjctMS4zNy0zLjQ1Ni0uOTU1LS45ODguNDEtMS4wOCAxLjE0Ni0xLjc4NSAzLjEyNiIvPjwvc3ZnPg=="></img>
                </h5>
            </button>
            <h5 className="tab">Symbol Maker</h5>
        </div>
        <Workspace width={width} height={height} />
        <Modal
            className="gridSettingsModal"
            isOpen={openGridSettings}
            onRequestClose={handleClick}
        >
            <h4>Grid Settings</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="rows">Numbers of Rows</label>
                <input type="number" name="rows" />
                <label htmlFor="columns">Numbers of Columns</label>
                <input type="number" name="columns" />
                <input type="submit" value="Submit" />
            </form>
        </Modal>
    </section>
)
}