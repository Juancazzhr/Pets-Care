import * as yup from "yup";

export const validationSchema = yup.object({    
    petName: yup.string().required("El nombre de la mascota es requerido"),
    type: yup.string().required("El tipo es requerido"),
    size: yup.string().required("El tamaño es requerido"),
    race: yup.string().required("La raza es requerida"),
});