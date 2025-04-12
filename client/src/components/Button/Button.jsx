import React from 'react';
import './Button.css';

const Button = (
    {
        onClick,
        icon,
        btnText,
        btnTextSize,
        btnTextWeight,
        btnTextSpacing,
        btnBgColor,
        btnHoverShadow,
        btnTextColor,
        btnBorder,
        btnOutline,
        btnPadding,
        btnBorderRadius,
        btnTransition
    }
) => {

    const btnStyle = {
        backgroundColor: btnBgColor,
        color: btnTextColor,
        fontWeight: btnTextWeight,
        fontSize: btnTextSize,
        letterSpacing: btnTextSpacing,
        border: btnBorder,
        borderRadius: btnBorderRadius,
        outline: btnOutline,
        padding: btnPadding,
        boxShadow: btnHoverShadow,
        transition: btnTransition,
    };

    return (
        <button
            style={btnStyle}
            className='btnStyle'
            onClick={onClick}
        >
            {icon && <span className="icon">{icon}</span>}
            {btnText}
        </button>
    )
}

export default Button;