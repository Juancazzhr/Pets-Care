
import React, { FC } from 'react'
import { Cards } from './cards'
import styles from "./Servicios.module.css";
import {servData} from './servData'
import { Button, Container } from '@mui/material';
import Stack from '@mui/material/Stack'
import TitleSection from '../../utils/TitleSection';


export const Servicios: FC = () => {
  return (
    <Container maxWidth={'xl'} className={styles.wrapper}> 
      <Stack className={styles.stack}>
        <Container className={styles.container}> 
        <TitleSection title='servicios' colorLine='64C9A7' colorText='573469'/>
          <Button className={styles.button} variant="contained">Solicita tu turno</Button>      
        </Container>
        <Cards servicio={servData}/>
      </Stack>
    </Container>
  )
}
