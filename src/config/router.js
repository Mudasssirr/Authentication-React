import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from '../pages/signup';
import Login from '../pages/login';

function BrowserRoute(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default BrowserRoute;