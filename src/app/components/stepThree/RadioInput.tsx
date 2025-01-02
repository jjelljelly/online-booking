import style from "./RadioInput.module.css";

export function RadioInput({ state, setState, label, value, name }: any) {
    return (
        <div className={style.fundingWrap}>
            <div className={style.radioCont}>
                <input
                    className={style.radioButton}
                    onChange={() => setState(value)}
                    type="radio"
                    name={name}
                    value={value}
                    checked={state === value}
                    required
                />
                <span className={state === value ? style.selected : style.unselected}>
                    {state === value ? <>&#10003;</> : ""}
                </span>
            </div>
            <div className={style.label}>
                <label htmlFor={value} className={style.label}>
                    {label}
                </label>
            </div>
        </div>
    );
}
