export const ActionButton = ({icon}) => {
    const className = 'ActionButton';
    const isFontAwesomeIcon = typeof icon === 'object' && icon.type === 'i';
    return (
        <button className={className}>
            {isFontAwesomeIcon ? icon :
                <img className={`${className}Icon`} src={icon} alt="icon"/>}
        </button>
    );
};
