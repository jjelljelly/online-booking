import style from './HeaderSection.module.css'
import { ChevronLeft } from "./ChevronLeft"
import { STEPS_NAMES } from '@/app/context/stepsContext';

export function HeaderSection({ stepUpdate, headerText }: { stepUpdate: STEPS_NAMES, headerText: string }) {
    return (
        <div className={style.headerDiv}>
            <div>
                <ChevronLeft stepUpdate={stepUpdate} />
            </div>
            <h2>{headerText}</h2>
            <div></div>

        </div>
    )
}