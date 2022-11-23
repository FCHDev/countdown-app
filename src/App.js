import Life from "./pages/Life";
import {
    Routes,
    Route
} from "react-router-dom";
import Events from "./pages/Events";

function App() {


    return (
        <div className="container mx-auto w-full flex flex-col justify-center align-middle items-center">
            <Routes>
                <Route path="/"
                       element={<Life/>}>
                </Route>
                <Route path="/events"
                       element={<Events/>}>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
