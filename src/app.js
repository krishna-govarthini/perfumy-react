import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Product from "./components/Product";
import AboutUs from "./components/AboutUs";
import Footer from "./Footer";

export default function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Product></Product>
            <AboutUs></AboutUs>
            <Footer></Footer>
        </div>
    )
}