
const Input = ({ type, name, value, label, handleInput, error, message}) => {
    return (
        <div className="input-group">
            <label htmlFor={name}>{label || name}</label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={handleInput}
                className={`form-input ${error && 'error'}`}
            />
            {error && <small>{message}</small>}
        </div>
    )
}

export default Input