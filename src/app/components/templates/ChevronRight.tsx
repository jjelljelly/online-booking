import ChevronRightIcon from '@mui/icons-material/ChevronLeft';
import { useStepsContext, StepsData, STEPS_NAMES } from '@/app/context/stepsContext';
import { IconButton, SvgIcon } from '@mui/material';

export function ChevronRight({ stepUpdateRight }: { stepUpdateRight: STEPS_NAMES }) {
    const value = useStepsContext()

    return (
        <IconButton onClick={() => value?.setStep(stepUpdateRight)}>
            <SvgIcon component={ChevronRightIcon} />
        </IconButton>
    )
}