
const Button = ({label, type, handleClick, className, isLoading='', error='', message}) => {
    return (
        <div>
            <button type={type} className={className} onClick={handleClick} disabled={isLoading || error}>{(isLoading) ? 'loading...' : `${label}` }</button>
            {error && <small>{message}</small>}
        </div>
    )
}

export default Button