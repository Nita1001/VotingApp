
const Button = ({label, type, handleClick, className, isLoading='', error=''}) => {
    return (
        <div>
            <button type={type} className={className} onClick={handleClick} disabled={isLoading || error}>{(isLoading) ? 'loading...' : `${label}` }</button>
        </div>
    )
}

export default Button