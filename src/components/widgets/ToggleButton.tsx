import "./ToggleButton.css";

const ToggleSwitch = ({ label, onClick }: {label: string, onClick: any}) => {
    return (
        <div className="container">
            {label}{" "}
            <div className="toggle-switch">
                <input 
                    type="checkbox" 
                    className="checkbox"
                    name={label} id={label} 
                    onClick={onClick}
                    style={{height: 25}}
                />
                <label className="label" htmlFor={label} style={{height: 25}}>
                    <span className="inner" style={{lineHeight: `25px`}} />
                    <span className="switch" />
                </label>
            </div>
        </div>
    );
};

export default ToggleSwitch;

