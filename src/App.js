import { BrowserRouter , Route,Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/booking-confirmed" element={<ConfirmedBooking />}></Route>
      </Routes>    
      
    </BrowserRouter>
  );
}

export default App;
