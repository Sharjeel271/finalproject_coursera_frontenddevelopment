import { screen, render } from "@testing-library/react";
import BookingTableForm from "./BookingTableForm";
import React, {Component} from "react";


test('Render the BookingTableForm date heading', () =>{
    
    const mockDispatch = jest.fn();

    render(<BookingTableForm availableTimes={[10,11]} reducerDispatch={mockDispatch}/>);
    const dateHeading = screen.getByText("Choose a date");
    expect(dateHeading).toBeInTheDocument();
})