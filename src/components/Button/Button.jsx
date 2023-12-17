const Button = ({ children, className = "", onClick }) => {

    return (
        <button
            onClick={onClick}
            className={`bg-black text-red-600 p-2 rounded font-bold ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;