import React, { useState, useEffect } from 'react';

const BookingForm = ({ formData, handleChange, handleSubmit, availableTimes }) => {

    const PasswordErrorMessage = () => {
        return (
            <p className="FieldError">Password should have at least 8 characters</p>
        );
    };

    const getIsFormValid = () => {
        return (
            formData.time &&
            formData.date &&
            formData.guests >= 1 &&
            formData.guests <= 10
        );
    };

    return (
        <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Date</label>
            <input
                type="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
            />
            <label htmlFor="res-time">Time</label>
            <select
                id="time"
                value={formData.time}
                onChange={handleChange}
            >
                {availableTimes.map((time, index) => (
                    <option key={index} value={time}>
                        {time}
                    </option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={formData.guests}
                onChange={handleChange}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={formData.occasion}
                onChange={handleChange}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input
                className='btn-primary'
                type="submit"
                value="Book a table"
                disabled={!getIsFormValid()} />
        </form>
    );
};

export default BookingForm;
