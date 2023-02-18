
const Button = ({label, type, handleLogout, className, isLoading='', error=''}) => {
    return (
        <div>
            <button type={type} className={className} onClick={handleLogout} disabled={isLoading || error}>{(isLoading) ? 'loading...' : `${label}` }</button>
        </div>
    )
}

export default Button