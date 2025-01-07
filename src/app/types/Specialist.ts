export class Specialist {
    biography: string
    specialistName: string
    specialistPicture: { fields: { file: { url: string, fileName: string } } }
    speciality: string

    private constructor(
        biography: string,
        specialistName: string,
        specialistPicture: { fields: { file: { url: string, fileName: string } } },
        speciality: string
    ) {
        this.biography = biography,
            this.specialistName = specialistName,
            this.specialistPicture = specialistPicture,
            this.speciality = speciality
    }
    static build({
        biography,
        specialistName,
        specialistPicture,
        speciality
    }: {
        biography: string
        specialistName: string
        specialistPicture: { fields: { file: { url: string, fileName: string } } }
        speciality: string
    }) {
        return new Specialist(
            biography,
            specialistName,
            specialistPicture,
            speciality
        )
    }
}