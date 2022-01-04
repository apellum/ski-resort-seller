import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { apiUrl } from '../GlobalVariable'
import { Grid, Paper, Card, CardContent, Button } from '@mui/material'

const Weather = ({close}) => {
    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: '20px auto', borderRadius: 25}

    const history = useHistory()
    const [open, setOpen] = useState(false)
    const [weather, setWeather] = useState({})
    const [initialLoad, setInitialLoad] = useState(false)

    useEffect(() => {
        if (!initialLoad)
            fetch(`${apiUrl}`)
                .then((resp) => resp.json())
                .then((data) => {
                    setWeather(data)
                    setInitialLoad(true)
                })
    }
        , [initialLoad])
        console.log(weather)

    const kelvinToFarenheight = (k) => {
        return (((k - 273.15) * 1.8) + 32).toFixed()
    }
    const handleClose = () => {
        history.push('/')
    }



    if (weather.main || weather.weather) {


        return (
            <div>
                <Grid item container alignItems="center" justify="center" flexDirection='column'>
                    <Paper elevation={10} style={paperStyle}>
                        <Grid alignItems='center' justify='center' direction='column' sx={{ minHeight: "100vh" }}>
                                <CardContent>Mountaintop Weather: {kelvinToFarenheight(weather.main.temp)}°F</CardContent>
                                <CardContent>Mountaintop Forecast: {weather.weather[0].description}</CardContent>
                                <Grid align='center' paddingBottom='0'>
                                    <Button onClick={close} sx={{justifyContent:'center'}}>Close</Button>
                                </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </div>
        )
    } else 
        return null
}

export default Weather
