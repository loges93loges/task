import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/submit', formData)
            .then(response => console.log(response.data))
            .catch(error => console.error('There was an error!', error));
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Message:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
