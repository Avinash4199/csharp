import React from 'react';
import './FormInput.css';

function FormInput({ label, type, name, value, onChange, required = false }) {
    return (
        <div className="form-input">
            <label>{label}</label>
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            )}
        </div>
    );
}

export default FormInput;
