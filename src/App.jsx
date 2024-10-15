import Footer from "./Pages/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Info from "./Pages/Info.jsx";
import Register from "./Pages/Register.jsx";

const App = () => {
    return (
        <body className="h-screen scroll-smooth font-roboto bg-gray-300">
            <Home />

            <main className="bg-gray-300">
                <Info />
            </main>

            <footer>
                <Footer />
            </footer>

            <Register />
        </body>
    )
}
export default App;