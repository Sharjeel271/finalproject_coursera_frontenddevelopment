import  React, { useState } from "react";

function BookingTableForm({availableTimes, reducerDispatch, submitForm}) {

    const [isDateErrorVisible, setIsDateErrorVisible] = useState(false);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);

    // The maximum and minimum number of guests
    const maxGuests = 8;
    const minGuests = 1;

    // Handles the date change
    const handleDateChange = (e) =>{
        const selectedDate = new Date(e.target.value);
        const currentDate = new Date();

        if (selectedDate < currentDate) {
            setIsDateErrorVisible(true)
            setDate('');
        }
        
        else {
            setIsDateErrorVisible(false);
            setDate(e.target.value);
            reducerDispatch({type: 'update_times', payload: selectedDate})
        }
    }

    // Handles the time change
    const handleTimeChange = (e) =>{
        setTime(e.target.value)
    }

    // Handles the guests change
    const handleGuestsChange = (e) =>{
        const newGuestValue = parseInt(e.target.value)

        if (newGuestValue > 8){
            setGuests(maxGuests)
        }

        else if (newGuestValue < 1){
            setGuests(minGuests)
        }

        else{
            setGuests(newGuestValue)
        }
    }

    // Handles the form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date: date,
            time: time,
            guests: guests
        }

        submitForm(formData);
    }

    return (
        <>
            <form className="table-form" onSubmit={handleSubmit}>
                <label for='booking-date'>Choose a date</label>
                <input type='date' id='booking-date' onChange={handleDateChange} value={date}/>
                {isDateErrorVisible && (
                    <p className="error-message">Invalid date selection. Please select a date in the future</p>
                    )
                }

                <label for='booking-time'>Choose a time</label>
                <select id='booking-time' onChange={handleTimeChange} value={time}>
                    <option value=''>Select a time</option>
                    {availableTimes.map(time =>
                       <option key={time}>{time}</option> 
                    )}
                </select>

                <label for='booking-guests'>Number of guests</label>
                <input type='number' id='booking-guests' onChange={handleGuestsChange} value={guests} min={minGuests} max={maxGuests}/>
                <input type='submit' className="link-button submit-button" value='Make Reservation'/>
            </form>
        </>
    )
}

export default BookingTableForm;