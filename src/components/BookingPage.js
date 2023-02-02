import BookingForm from "./BookingForm";
import { useState , useReducer } from "react";
import { useNavigate } from "react-router-dom";
function BookingPage() {
  const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());
    
    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const navigate = useNavigate();
  const updateTimes = (date) => {
    return fetchAPI(date)
   
  };
  const initializeTimes  = () => {
    return fetchAPI(new Date())
     
  }
  const initialState = {time: initializeTimes()};
  const reducer = (state, action) => {
    switch (action.type) {
       case 'addDate':
          console.log(action)
          return {...state, time : updateTimes(action.payload)};
       default:
        return {...state,time : initializeTimes()}
    }
 }
  const [ state, dispatch ] = useReducer(reducer,initialState);
  const submitForm  = (formData) => {
    if (submitAPI(formData)){
      
      navigate("/booking-confirmed");
    }
  }
  return (
    <section>
      <BookingForm avTime={state.time} submitForm={submitForm} dispatch={dispatch} />
    </section>
  );
}
export default BookingPage;
