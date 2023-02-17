
const Input = ({type, label}) => {
    return (
        <div className="input-group">
            <label>{label}</label>
            <input type={type} />
        </div>
    )
}

export default Input