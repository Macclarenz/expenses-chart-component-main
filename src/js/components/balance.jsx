import react from "react";
import reactDom from "react-dom";

// Icon
import logo from '../../images/logo.svg'

export default function Balance() {
    return (
        <div className="balance-container">
            <div className="balance-text-container">
                <p>My balance</p>
                <p><strong>$921.48</strong></p>
            </div>
            <img src={logo} alt="logo" />
        </div>
    )
}