import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from "./Pages/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Info from "./Pages/Info.jsx";
import Register from "./Pages/Register.jsx";
import LogIn from "./Pages/LogIn.jsx";
import ClientSide from './Pages/ClientSide.jsx';

const App = () => {
    return (
        <Router>
            <div className="h-screen scroll-smooth font-roboto bg-gray-300">
                <Routes>

                    {/* Main page route */}
                    <Route path="/" element={
                        <>
                            <Home />
                            <main className="bg-gray-300">
                                <Info />
                            </main>
                            <Footer />
                        </>
                    } />

                    {/* Register page route */}
                    <Route path="/register" element={<Register />} />

                    {/* LogIn page route */}
                    <Route path="/login" element={<LogIn />} />
                    {/* Access to dashboard */}
                    <Route path="/dashboard" element={<ClientSide />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;