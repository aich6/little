import { useState , useEffect} from "react";

function BookingForm({avTime, dispatch,submitForm}) {
 
    const [guests, setGuests] = useState(1)
    const [occasion, setOccasion] = useState('')
    const [date,setDate] = useState('')
    const [time,setTime] = useState('')
    const [valid,setValid] = useState(false)
    
    const handleChange = (e)=> {
      setDate(e.target.value)
      const validDate = new Date(date)
      dispatch({type: 'addDate',payload:validDate})
    }
    const validate = () => {
      return  date.length && time.length ;
    };
    const handleSubmit = (e) => {
      
        e.preventDefault();
        submitForm({
          guest: guests,
          time: time,
          date: date,
          occasion: occasion
        })
    }
    
    return (
      <>
        <h1>Book Now</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose date</label>
        <input required value={date} onChange={handleChange} type="date" id="res-date" />
        <label htmlFor="res-time">Choose time</label>
        <select value={time} onChange={(e)=> setTime(e.target.value)} id="res-time ">
        {avTime && avTime.map((project) => (
          <option key={project}>{project}</option>
        ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" value={guests} onChange={(e)=> setGuests(e.target.value)} min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select value={occasion} onChange={(e)=> setOccasion(e.target.value)} id="occasion">
           <option>Birthday</option>
           <option>Anniversary</option>
        </select>
        <input aria-label="On Click" disabled={!validate()} type="submit" value="Make Your reservation" />
     </form> 
     </>
    );
  }
  export default BookingForm;