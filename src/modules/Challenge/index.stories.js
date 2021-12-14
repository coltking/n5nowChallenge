import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid, Typography, Divider } from '@material-ui/core'

storiesOf('Challenge', module)
    .add('Component', () => {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h3">Jr. Front End Challenge</Typography>
                    <Divider />
                </Grid>
                <Grid item>
                    {
                        //El componente propuesto arriba se compone de 2 secciones: ***Categorias*** y ***Top10.***
                        //Se le proveera al candidato la documentacion de la API a la que debe apuntar para obtener esta informacion.
                        //Para este caso se invocara a un endpoint por cada una de las secciones.
                    }
                </Grid>
            </Grid>
        )
    })