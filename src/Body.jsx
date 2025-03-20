import React, { useEffect, useReducer,useState } from "react";
import BookingTableForm from "./BookingTableForm";
import { submitAPI, fetchAPI } from "./API";
import { useNavigate } from "react-router-dom";

function Body() {

    const navigate = useNavigate();

    // Store booked times in local storage  
    const[bookedTimes, setBookedTimes] = useState(() => {
        const storedTimes = localStorage.getItem('bookedTimes');
        return storedTimes ? JSON.parse(storedTimes): {};
    });

    // Updates the local storage then the bookedTimes state updates
    useEffect(() =>{
        localStorage.setItem('bookedTimes', JSON.stringify(bookedTimes));
    },[bookedTimes])

    // Updates the times based on the selected date
    const updateTimes = (state, action) => {
        if (action.type === "update_times") {

            // Formats the date for matching with the stored dates
            const dateObject = new Date(action.payload);
            const year = dateObject.getFullYear();
            const month = String(dateObject.getMonth() + 1).padStart(2, '0');
            const date = String(dateObject.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${date}`;

            const times = fetchAPI(action.payload);
            
            // Checks if the date is in the bookedTimes object  
            const bookedTimesForDate = bookedTimes[formattedDate] || [];

            // Filters out all the times on the matching date
            return times.filter((time) => !bookedTimesForDate.includes(time)) ;
        }

        else if (action.type === "initial_times") {
            return action.payload;
        }

        else if (action.type === "reset_times") {
            return [];
        }
    }

    const submitForm = (formdata) =>{
        const result = submitAPI(formdata);

        if (result === true){

            // Updates the bookedTimes object with the new booking
            setBookedTimes((prev) =>{

                // Creates a copy of the state  
                const updatedBookedTimes = {...prev};

                // Checks if the date is already in the object
                if (!updatedBookedTimes[formdata.date]){
                    updatedBookedTimes[formdata.date] = [];
                }

                // Adds the new time to the date array
                updatedBookedTimes[formdata.date].push(formdata.time);

                // Returns the updated object
                return updatedBookedTimes;
            })
            navigate('/confirmedbooking');
        }

        else{
            alert('There was an error with your booking. Please try again.')
        }
    }

    const initiialTimes = () => {
        return [];
    };

    const ResetBookedTimes = () => {
        setBookedTimes({});
        localStorage.removeItem('bookedTimes');
    };

    const [availableTimes, dispatch] = useReducer(updateTimes, initiialTimes())

    return (
        <>
            <BookingTableForm availableTimes={availableTimes} reducerDispatch={dispatch} submitForm={submitForm}></BookingTableForm>

            {/* Hidden button to reset the booked times for testing*/}
            <button onClick={ResetBookedTimes} className="submit-button link-button hidden">Reset</button>
        </>
    )
}

export default Body;