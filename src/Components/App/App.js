import './App.css';
import Configuration from "../Configuration/Configuration";
import Card from "../Card/Card";
import {useState} from "react";

const STEPS = {
    CONFIG: 'config',
    CARD: 'card',
    CONFIRM: 'confirm'
}

function App() {
    const [step, setStep] = useState(STEPS.CONFIG);
    return (
        <div className="container">
            <div className="row">
                {step === STEPS.CONFIG && <Configuration
                    onNextClick={()=>setStep(STEPS.CARD)}
                />}
                {step === STEPS.CARD && <Card
                    onBackCard={()=>setStep(STEPS.CONFIG)}
                    onNextCard={()=>setStep(STEPS.CONFIRM)}
                />}
            </div>
        </div>
    );
}

export default App;
