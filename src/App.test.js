import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';
import BookingPage from "./components/BookingPage";

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})
test('initializeTimes  the BookingPage heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})