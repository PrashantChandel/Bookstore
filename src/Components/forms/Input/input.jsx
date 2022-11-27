import React from "react";
import './styles.css'
const FormInput = ({ handleChange, label, ...otherprops }) => {
    return (
        <div className="form-row">
            {label && (
                <label>
                    {label}
                </label>
            )}
            <input className="form-input border-2 border-slate-500" type="text" onChange={handleChange} {...otherprops} />
        </div>
    )
}

export default FormInput;

