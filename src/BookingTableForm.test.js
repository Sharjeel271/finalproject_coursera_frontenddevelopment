import { screen, render, fireEvent, waitFor } from "@testing-library/react";
import BookingTableForm from "./BookingTableForm";
import React, {Component} from "react";


test('Render the BookingTableForm date heading', () =>{
    
    const mockDispatch = jest.fn();

    render(<BookingTableForm availableTimes={['10:00', '11:00']} reducerDispatch={mockDispatch}/>);
    const dateInput = screen.getByLabelText("Choose a date");
    expect(dateInput).toBeInTheDocument();
})

test("Validates if date input possesses the required attributes - HTML testing", () => {

    const mockDispatch = jest.fn();

    render(<BookingTableForm availableTimes={['10:00', '11:00']} reducerDispatch={mockDispatch}/>);
    const dateInput = screen.getByLabelText("Choose a date");
    expect(dateInput).toBeRequired();

})

test("Validates if time input possesses the required attributes - HTML testing", () => {

    const mockDispatch = jest.fn();

    render(<BookingTableForm availableTimes={['10:00', '11:00']} reducerDispatch={mockDispatch}/>);
    const timeInput = screen.getByLabelText("Choose a time");
    expect(timeInput).toBeRequired();

})

test("Validates if guests input possesses the min and max attributes - HTML testing", () => {

    const mockDispatch = jest.fn();

    render(<BookingTableForm availableTimes={['10:00', '11:00']} reducerDispatch={mockDispatch}/>);
    const guestInput = screen.getByLabelText("Number of guests");
    expect(guestInput).toHaveAttribute("min", "1");
    expect(guestInput).toHaveAttribute("max", "8");

})

test("Checks if the submit button is enabled when time and date has been entered - JavaScript testing", () => {

    const mockDispatch = jest.fn();

    render(<BookingTableForm availableTimes={['10:00', '11:00']} reducerDispatch={mockDispatch}/>);
    
    // Select the date
    const dateInput = screen.getByLabelText('Choose a date');
    fireEvent.change(dateInput, {target: {value: '2025-05-12'}})
    
    // Select the time
    const timeOptions = screen.getByLabelText('Choose a time');
    fireEvent.change(timeOptions, {target: {value: '10:00'}});

    const submitButton = screen.getByRole('button', { name: /make reservation/i });

    expect(submitButton).toBeEnabled();

})

test("Checks if the submit button is disabled when neither time or date has been entered - JavaScript testing", () => {

    const mockDispatch = jest.fn();

    render(<BookingTableForm availableTimes={['10:00', '11:00']} reducerDispatch={mockDispatch}/>);

    const submitButton = screen.getByRole('button', { name: /make reservation/i });

    expect(submitButton).toBeDisabled();
})

test("Checks if the submit button is disabled when only date has been entered - JavaScript testing", () => {

    const mockDispatch = jest.fn();

    render(<BookingTableForm availableTimes={['10:00', '11:00']} reducerDispatch={mockDispatch}/>);
    
    // Select the date
    const dateInput = screen.getByLabelText('Choose a date');
    fireEvent.change(dateInput, {target: {value: '2025-05-12'}})

    const submitButton = screen.getByRole('button', { name: /make reservation/i });

    expect(submitButton).toBeDisabled();

})