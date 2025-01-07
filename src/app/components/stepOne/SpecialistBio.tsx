import Card from "@mui/material/Card"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import style from './SpecialistBio.module.css'
import { Specialist } from "@/app/types/Specialist";
import Image from "next/image";
import { fetchEntries } from "@/app/lib/contenful";
import { useEffect, useState } from "react";

type SpecialistResponse = {
    biography: string
    specialistName: string
    specialistPicture: { fields: { file: { url: string, fileName: string } } }
    speciality: string
}

export function SpecialistBio() {
    const [specialistBio, setspecialistBio] = useState<Specialist[] | null>()

    useEffect(() => {
        fetchEntries({
            content_type: "specialistCard",
        })
            .then((result) => {
                const updateResult: Specialist[] | null = (result as unknown as { fields: SpecialistResponse }[])?.map((item) => Specialist.build({
                    ...item.fields
                })) ?? null
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
                    <Card key={specialist.specialistName} className={style.card}>
                        <Typography variant="body1" sx={{ color: 'text.secondary', paddingBottom: '5px', fontFamily: "comorant" }}>
                            {specialist?.fields?.specialistName}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary', paddingBottom: '5px', fontFamily: "comorant" }}>
                            {specialist.speciality}
                        </Typography>
                        <Image
                            width={250}
                            height={250}
                            className={style.image}
                            src={'https:' + specialist.specialistPicture.fields.file.url}
                            alt={specialist.specialistPicture.fields.title}
                        />
                        <hr className={style.line} />
                        <CardContent>
                            <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: "comorant" }}>
                                {specialist.biography}
                            </Typography>
                        </CardContent>
                    </Card >
                ))}

            </div >
        </>
    )
}