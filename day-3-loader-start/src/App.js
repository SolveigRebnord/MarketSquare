import Loader from "./components/shared/Loader";
import Router from "./routes/Router"
import Header from "./components/shared/Header"
import { useSelector } from "react-redux";

function App() {
    const {isLoading} = useSelector(state => state.loader)
    console.log(isLoading) // gir true eller false, staten til loaderen vår

    return (
        <>
            <Header/>
            <Router />
            {isLoading && <Loader/>}
        </>
    );
}

export default App;
