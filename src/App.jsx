import ClientSide from "./Pages/ClientSide.jsx";
import Footer from "./Pages/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Info from "./Pages/Info.jsx";
import Register from "./Pages/Register.jsx";

const App = () => {
    return (
        <div className="h-screen scroll-smooth font-roboto bg-gray-300">
            {/* <Home />

            <main className="bg-gray-300">
                <Info />
            </main>

            <footer>
                <Footer />
            </footer>

            <Register /> */}
            <ClientSide />
        </div>
    )
}
export default App;