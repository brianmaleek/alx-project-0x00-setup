import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
            {title}
        </button>
    );
}
export default Button;