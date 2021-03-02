import React from "react";

export default function Form ( props ) {

    const { values, update, submit } = props;

    const onChange = event => {
        const { name, value } = event.target;
        update ( name, value );
    }

    const onSubmit = event => {
        event.preventDefault();
        submit();
    }

    return(
        <form className = "form-section" onSubmit = { onSubmit }>
            <div className = "form-group-inputs">
                <label>
                    Name
                    <input
                        type = "text"
                        name = "name"
                        value = { values.name } // do i need to use 'this.'
                        placeholder = "name"
                        onChange = { onChange } // is the target data correct? event => update(event.target.value)
                    /> 
                </label>

                <label>
                    Email
                    <input
                        type = "email"
                        name = "email"
                        value = { values.email }
                        placeholder = "email"
                        maxLength = "30" 
                        onChange = { onChange } // event => update(event.target.value) 
                    />
                </label>

                <label>
                    Role
                    <select
                        name = "role"
                        value = { values.role }
                        onChange = { onChange }
                        >
                        <option value = "">---Select Role Please---</option>
                        <option value = "teacher">Teacher</option>
                        <option value = "student">Student</option>
                        <option value = "parent">Parent</option>
                    </select>
                </label>
            </div>
            <div className = "submit-container">
                <button>Submit</button>
            </div>
        </form>
    )
}