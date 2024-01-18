const Button = ({ children, className = "", onClick }) => {

    return (
        <button
            onClick={onClick}
            className={`bg-red-800 hover:bg-red-950 text-black border-2 border-black p-2 rounded font-bold ${className}`}
        >
            {children}
        </button>
    );
}; 

export default Button;