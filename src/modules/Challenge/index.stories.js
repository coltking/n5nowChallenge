import React, { useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import { Grid, Typography, Divider } from '@material-ui/core'
import { useSelector } from 'react-redux'


import withProvider from '../withProvider.js'

storiesOf('Challenge', module).addDecorator((storyFn) => withProvider(storyFn))
    .add('Component', () => {
        const top10 = useSelector(state => state.topTen.values)
        useEffect(() => {
            console.log(top10);
        }, [top10])
        return <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant="h3">Jr. Front End Challenge</Typography>
                <Divider />
            </Grid>
            <Grid item>
                <Grid container xs={12}>
                    {
                        top10.map(item => (
                            <Grid item xs={12} key={item.id}>
                                <Typography variant="h5">{item.title}</Typography>
                                <Typography variant="body1">{item.groupDescription}</Typography>
                                <Typography variant="body1">{item.id}</Typography>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    })