import React from 'react';
import './styles.scss';


type Props = {
    text: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => any;
}

const Button = ({ text, onClick }: Props) => {
    return (

        <button className="btn-icon" onClick={onClick}>
            {text}
        </button>

    );
}

export default Button;