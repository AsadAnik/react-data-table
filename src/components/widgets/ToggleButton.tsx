import "./ToggleButton.css";

const ToggleSwitch = ({ label, onClick, height }) => {
    return (
        <div className="container">
            {label}{" "}
            <div className="toggle-switch">
                <input 
                    type="checkbox" 
                    className="checkbox"
                    name={label} id={label} 
                    onClick={onClick}
                    style={{height: height}}
                />
                <label className="label" htmlFor={label} style={{height: height}}>
                    <span className="inner" style={{lineHeight: `${height}px`}} />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default ToggleSwitch;

