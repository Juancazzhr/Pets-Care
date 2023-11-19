import { FC, useContext } from 'react'
import Paper from '@mui/material/Paper'
import styles from './Appointments.module.css'
import StepperAppointment from './formItems/stepper/StepperAppointment'
import Alert from '@mui/material/Alert'
import AuthContext from '../../context/AuthContext'
import Button from '@mui/material/Button'
import { Stack } from '@mui/material'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { getProfessionals, getServices } from '../../services/stepperService'
import { Service } from '../../interfaces/servicios'
import { Professional } from '../../interfaces/profesionales'

interface Props {  
    services: Service[]
    professionals: Professional[]
}

const Appointments: NextPage<Props> = ({services, professionals}) => {

    const { auth } = useContext(AuthContext);
    return (
        <Paper className={styles.paper}>
            {auth ?
                <StepperAppointment services={services} professionals={professionals}  />
                :
                <Stack className={styles.boxAlert}>
                    <Alert variant="outlined" severity="warning">
                        Para agendar un turno necesitas estar registrado y haber iniciado sesión
                    </Alert>
                    <Button variant="contained" color='secondary' className={styles.buttonLogin} href='/login'>iniciar sesión</Button>
                </Stack>}

        </Paper>
    )
}


export const getStaticProps: GetStaticProps = async () => {

       
    const services = await getServices()
    const professionals = await getProfessionals()

    console.log({services});
    
    return {
        props: {
            services,
            professionals
        }
    }
}

export default Appointments;


/* 
export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {

       
    const services = await getServices()
    const professionals = await getProfessionals()

    console.log({services});
    

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate'
    )
    return {
        props: {
            services,
            professionals
        }
    }
} */