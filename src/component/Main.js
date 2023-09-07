import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Menu from "./Menu";
import BookingPage from "./BookingPage";
import Order from "./Order";
import Login from "./Login";


export default function Main() {

    const [availableTimes,setAvailableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ]);

        // Define state for form data
        const [formData, setFormData] = useState({
            date: '',
            time: '17:00',
            guests: 1,
            occasion: 'Birthday'
        });

        const initializeTimes = async () => {
        const url = "https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js";
        try {
            const response = await fetch(`${url}`);
            const data = await response.json();
            setAvailableTimes(data.availableTimes);
            // Set a default time (e.g., the first available time)
            if (data.availableTimes.length > 0) {
                setFormData({
                    ...formData,
                    time: data.availableTimes[0]
                });
            }
        } catch (error) {
            console.error('Error fetching available times:', error);
        }
    };



    // Event handler for form field changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your reservation submission logic here
        console.log(formData); // Example: Log the form data
    };

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/bookingPage" element={
                <BookingPage
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    availableTimes={availableTimes}
                />}
            />
            <Route path="/order" element={<Order />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}