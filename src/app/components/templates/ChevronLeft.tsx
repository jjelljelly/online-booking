import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useStepsContext, STEPS_NAMES } from '@/app/context/stepsContext';
import { IconButton, SvgIcon } from '@mui/material';

export function ChevronLeft({ stepUpdate }: { stepUpdate: STEPS_NAMES }) {
    const value = useStepsContext()

    return (
        <IconButton onClick={() => value?.setStep(stepUpdate)}>
            <SvgIcon component={ChevronLeftIcon} />
        </IconButton>
    )
}