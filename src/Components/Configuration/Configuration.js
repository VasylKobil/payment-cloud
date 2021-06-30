import React, {useContext} from 'react';
import {RadioCheck} from "../RadioCheck";
import {ConfigContext} from "../../Context/ConfigContext";

const durations = [{
    name: '3 Months',
    value: 3,
},{
    name: '6 Months',
    value: 6,
},
{
    name: '12 Months',
    value: 12,
}]
const memories = [{
    name: '5 GB',
    value: 5,
},{
    name: '10 GB',
    value: 10,
},
{
    name: '50 GB',
    value: 50,
}]

function Configuration(props){
    const {onNextClick} = props;
    const {config, setConfig} = useContext(ConfigContext)

    const onRadioChange = (value, propName) => {
        setConfig({
            ...config,
            [propName]: value}
        );
    }

    return(
        <>
            <RadioCheck
                label="Duration"
                name="duration"
                items={durations}
                value={config.duration}
                onValueChange={(event)=>onRadioChange(event.target.value, 'duration')}
            />
            <RadioCheck
                label="Memory"
                name="memory"
                items={memories}
                value={config.memory}
                onValueChange={(event)=>onRadioChange(event.target.value, 'memory')}
            />
            <div className="form-check form-switch">
                <label className="form-check-label">
                    <input className="form-check-input"
                           type="checkbox"
                           checked={config.upfront}
                           onChange={(event) => setConfig({
                               ...config,
                               upfront: event.target.checked
                           })}
                    />
                    Upfront payment
                </label>
            </div>
            <button type="button" className="btn btn-success" onClick={onNextClick}>Next</button>
        </>
    );
}
export default Configuration;