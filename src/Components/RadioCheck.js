export function RadioCheck(props){
    const {items, label, memory, value, onValueChange} = props;

    return (
        <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-2 pt-0">{label}</legend>
                <div className="col-sm-3">
                {items.map((item, index) => (
                    <div className="form-check" key={item.value}>
                        <label className="form-check-label">
                            <input
                                className="form-check-input"
                                type="radio"
                                name={memory}
                                value={item.value}
                                onChange={onValueChange}
                                checked={value === items[index].value}
                            />
                            {item.name}
                        </label>
                    </div>
                    ))}
                </div>
        </fieldset>
    )
}