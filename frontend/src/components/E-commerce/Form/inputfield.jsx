
const InputField = ({ name, value, label, error, onValChange }) => {
    return (
        <div>
            {error && <span className="alert alert-danger"> {error} </span>}
            <div className='form-floating mb-3'>
                <input name={name} type="text" className="form-control" id={name} value={value}
                    placeholder={label} onChange={onValChange} />
                <label htmlFor={name}>{label}</label>
            </div>
        </div>
    );
};

export default InputField;

