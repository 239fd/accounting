import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home/Home";

import React  from 'react';
import 'bootstrap/dist/css//bootstrap.min.css';
import NaviBar from "./Components/NaviBar/NaviBar";
import Support from "./Components/Support/Support";
import Info from "./Components/Info/Info";
import Receiver from "./Components/Receiver/Receiver";
import Storekeeper from "./Components/Storekeeper/Storekeeper";
import Manager from "./Components/Manager/Manager";
import TakeReceiver from "./Components/Receiver/TakeReceiver";
import ShipReceiver from "./Components/Receiver/ShipReceiver";
import ShipStorekeeper from "./Components/Storekeeper/ShipStorekeeper";
import TakeStorekeeper from "./Components/Storekeeper/TakeStorekeeper";

function App() {
    return (
        <>
            <BrowserRouter>
                <NaviBar/>
                <Routes>
                    <Route exact path="/" element= { <Home/>} />
                    <Route exact path="/info" element={<Info/>}/>
                    <Route exact path="/support" element={<Support/>}/>
                    <Route exact path="/register" element= { <Register/>} />
                    <Route exact path="/login" element= { <Login/>} />
                    <Route exact path="/manager" element={<Manager/>}></Route>
                    <Route exact path="/storekeeper" element={<Storekeeper/>}></Route>
                    <Route exact path="/receiver" element={<Receiver/>}></Route>
                    <Route exact path="/receiver/take" element={<TakeReceiver/>}></Route>
                    <Route exact path="/receiver/ship" element={<ShipReceiver/>}></Route>
                    <Route exact path="/storekeeper/take" element={<TakeStorekeeper/>}></Route>
                    <Route exact path="/storekeeper/ship" element={<ShipStorekeeper/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
