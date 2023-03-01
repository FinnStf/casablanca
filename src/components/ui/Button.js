import style from './Button.module.css';

export default function Button(props){
    return (
        <button
            type={props.type || 'button'}
            className={`${style.button} ${style[props.className]} ${props.padding&&style['padding-small']}`}
            onClick={props.onClick}
            disabled={props.disabled}
            style={props.style}
        >
            {props.children}
        </button>
    );
};

