import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import React, {Component} from "react";
import Body from "./Body";
import { MemoryRouter } from "react-router-dom";


test('Render the times', () =>{

    const expectedTimes = [
        'Select a time', '17:00','17:30','18:30','19:30','20:30','21:00','22:00','23:00',
    ];

    render(
    <MemoryRouter>
        <Body/>
    </MemoryRouter>
    );

    const allTimes = screen.getByLabelText('Choose a time');

    const formatedTimeOptions = Array.from(allTimes.querySelectorAll('option')).map(option => option.textContent);

    expect(formatedTimeOptions).toEqual(expectedTimes);
})

test('Check correct time is appearing when date is selected', () =>{

    const expectedTimes = [
        'Select a time', '17:00','17:30','18:00','19:00','21:00','21:30','23:30',
    ];

    render(
        <MemoryRouter>
            <Body/>
        </MemoryRouter>
    );
    
    // Select the date
    const dateInput = screen.getByLabelText('Choose a date');
    fireEvent.change(dateInput, {target: {value: "2025-05-12"}})

    // Get the time options
    const timeOptions = screen.getByLabelText('Choose a time');

    // Format the time options
    const formatedTimeOptions = Array.from(timeOptions.querySelectorAll('option')).map(option => option.textContent);

    expect(formatedTimeOptions).toEqual(expectedTimes);
})




test('Check if the reserved time and date is correctly stored in the local storage', async () =>{

    // Clear the local storage
    localStorage.clear();

    // The expected result
    const expectedResult = {"2025-05-12":["18:00"]};
    let storedBookTimed;

    render(
        <MemoryRouter>
            <Body/>
        </MemoryRouter>
    );

    // Select the date
    const dateInput = screen.getByLabelText('Choose a date');
    fireEvent.change(dateInput, {target: {value: "2025-05-12"}})

    // Select the time
    const timeOptions = screen.getByLabelText('Choose a time');
    fireEvent.change(timeOptions, {target: {value: '18:00'}});

    // Submit the form
    const submitButton = screen.getByText('Make Reservation');
    fireEvent.click(submitButton);

    // Wait for the local storage to update
    await waitFor(() => {
        storedBookTimed = localStorage.getItem('bookedTimes');
    });

    expect(storedBookTimed).toEqual(JSON.stringify(expectedResult));

})


test('Checks if the booked time and date from local storage is correctly skipped', () =>{

    // Clear the local storage
    localStorage.clear();

    // Set the booked times in the local storage
    localStorage.setItem('bookedTimes', JSON.stringify({"2025-05-12":["18:00"]}));

    const expectedTimes = [
        'Select a time', '17:00','17:30','19:00','21:00','21:30','23:30',
        ];

    render(
        <MemoryRouter>
            <Body/>
        </MemoryRouter>
    );

    // Select the date
    const dateInput = screen.getByLabelText('Choose a date');
    fireEvent.change(dateInput, {target: {value: "2025-05-12"}})

    // Get the time options
    const timeOptions = screen.getByLabelText('Choose a time');

    // Format the time options
    const formatedTimeOptions = Array.from(timeOptions.querySelectorAll('option')).map(option => option.textContent);

    expect(formatedTimeOptions).toEqual(expectedTimes);

})