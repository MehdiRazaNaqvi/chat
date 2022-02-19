import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import App from "../components/App";
import Chat from "../components/chat";



const router = () => {
    return (
        <div>
           
                <Router>
                    <Routes>
                        <Route exact path = "/" element={<App/>} />
                        <Route path = "/ch" element={<Chat/>} />
                        <Route path = "*" element={<App/>} />
                    </Routes>
                </Router>
        </div>
    )
}

export default router