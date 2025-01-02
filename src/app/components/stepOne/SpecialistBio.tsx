import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import style from './SpecialistBio.module.css'
import { Button } from "@mui/material";
import Image from "next/image";
import { fetchEntries } from "@/app/lib/contenful";
import { useEffect, useState } from "react";

export function SpecialistBio() {
    const [specialistBio, setspecialistBio] = useState<any>()
    const [displayBio, setDisplayBio] = useState("none")

    useEffect(() => {
        fetchEntries({
            content_type: "specialistCard",
        })
            .then((result) => {
                const updateResult = result
                setspecialistBio(updateResult)
            })
            .catch(err => console.error(err))
    }, []);

    return (
        <>
            <div className={style.pageBreakDiv}>
                <hr className={style.pageBreak} />
            </div>
            <h2>Our Specialists</h2>

            <div className={style.cardContainer}>


                {specialistBio?.map((specialist: any) => (
                    <>
                        <Card key={specialist.fields.specialistName} className={style.card}>
                            <Typography variant="body1" sx={{ color: 'text.secondary', paddingBottom: '5px', fontFamily: "comorant" }}>
                                {specialist?.fields?.specialistName}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary', paddingBottom: '5px', fontFamily: "comorant" }}>
                                {specialist?.fields?.speciality}
                            </Typography>
                            <Image
                                width={250}
                                height={250}
                                className={style.image}
                                src={'https:' + specialist?.fields?.specialistPicture?.fields?.file?.url}
                                alt={specialist?.fields?.specialistPicture?.fields?.title}
                            />
                            <hr className={style.line} />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: "comorant" }}>
                                    {specialist?.fields?.biography}
                                </Typography>
                            </CardContent>
                        </Card >
                    </>
                ))}

            </div >
        </>
    )
}