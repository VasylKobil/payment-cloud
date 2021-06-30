import React, {useContext} from 'react';
import {ConfigContext} from "../../Context/ConfigContext";



function Card(props){
    const {config} = useContext(ConfigContext);
    const {onBackCard, onNextCard} = props;


    return(
        <>
            <div className="mb-3">
                <div><span className="header">Payment</span>
                    <div className="icons"><img alt="visa" src="https://img.icons8.com/color/48/000000/visa.png"/> <img
                        alt="master-card" src="https://img.icons8.com/color/48/000000/mastercard-logo.png"/> <img
                        alt="master-card" src="https://img.icons8.com/color/48/000000/maestro.png"/></div>
                </div>
                <form><span>Cardholder's name:</span> <input placeholder="Linda Williams"/> <span>Card Number:</span>
                    <input placeholder="0123 4567 8909 8765"/>
                        <div className="row">
                            <div className="col-4"><span>Expiry date:</span> <input placeholder="YY/MM"/></div>
                            <div className="col-4"><span>CVV:</span> <input id="cvv"/></div>
                        </div>
                </form>
            </div>
            <div>
                <button type="button" className="btn btn-danger" onClick={onBackCard}>Back</button>
                <button type="button" className="btn btn-success" onClick={onNextCard}>Next</button>
            </div>
        </>
    );
}

export default Card;