import React from 'react';
import '../styles/common.css';
import '../styles/bookingPage.css';
import BookingForm from './BookingForm';

const BookingPage = ({ formData, handleChange, handleSubmit, availableTimes }) => {
    return (
        <section className='booking'>
            <div className='container'>
            <h2 className='display-title'>Little Lemon</h2>
            <h3 className='sub-title'>Chicago</h3>
            <h4 className='lead-text'>Find a table for any occasion</h4>

            <BookingForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                availableTimes={availableTimes}
            />
            </div>
        </section>
    );
};

export default BookingPage;
