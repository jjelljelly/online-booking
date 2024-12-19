import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export function Loading({ isLoading }: { isLoading: boolean }) {

    return (
        <>
            <Backdrop color={'var(--dark-blue)'} open={isLoading} >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}