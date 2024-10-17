import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useStepsContext, STEPS_NAMES } from '../context/stepsContext';

export function Loading({ isLoading }: any) {
    const value = useStepsContext()

    return (
        <>
            <Backdrop color={"#20365F"} open={isLoading ? true : false} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}