import ToolBox from './components/ToolBox'
import StitchesCollection from './components/StitchesCollection'
// import Workspace from './components/Workspace'
import OrganiserBox from './components/OrganiserBox'
import Tabs from './components/Tabs'


function App() {


    return (
        <>
            <header>
                <ToolBox />
                {/* <Tabs /> */}
            </header>
            <main>
                <StitchesCollection />
                <Tabs />
                <OrganiserBox />
            </main>
            <footer>

            </footer>
        </>
    )
}

export default App
