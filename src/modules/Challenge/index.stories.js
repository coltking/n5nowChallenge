import React, { useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import { Grid, Typography, Divider } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'


import withProvider from '../withProvider.js'
import { getTopTen } from '../../store/actions/topTen.js'
import { getCategories } from '../../store/actions/categories.js'

storiesOf('Challenge', module).addDecorator((storyFn) => withProvider(storyFn))
    .add('Component', () => {
        const top10 = useSelector(state => state.topTen.values)
        const categories = useSelector(state => state.categories.values)
        const dispatch = useDispatch()
        useEffect(() => {
            dispatch(getTopTen())
            dispatch(getCategories())
        }, [])
        console.log(top10);
        return <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant="h3">Jr. Front End Challenge</Typography>
                <Divider />
            </Grid>
            <Grid item>
                <Grid container alignItems='center' spacing={3}>
                    {
                        categories.map(category => (
                            <Grid item xs={4} direction='row' container spacing={1}>
                                <Grid item xs={1} justifyContent='center' align='center' container>
                                    <div className='ctasCount' style={{ backgroundColor: category.color }}>{category.ctasCount}</div>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography variant='subtitle1' >{category.name}</Typography>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
                <Grid container xs={12}>
                    {
                        top10.map(item => (<>
                            <ListItem>
                                <Grid item xs={2} justifyContent='center' align='center' container>
                                    <Avatar>{item.customerName[0]}</Avatar>
                                </Grid>
                                <Grid>
                                    <Typography variant='h5' align='left'>{item.customerName + " " + item.customerLastName}</Typography>
                                    <Typography align='left' variant='subtitle2'>{item.title + ": " + item.groupDescription}</Typography>
                                </Grid>
                            </ListItem>
                            <Divider variant="middle" />
                        </>))
                    }
                </Grid>
            </Grid>
        </Grid>
    })