import React from 'react'
import './Feature.css'
import { Grid } from '@mui/material'

const Feature = () => {
    return (
        <div className="feature main">
            <div>
                <h1 className="feature-h1 skill-h1">Azil-chain Eco System</h1>
            </div>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={5}></Grid>
                <Grid item xs={12} sm={7}>
                    <p className="feature-p skill-h2">Azil-chain is a combination of tools which are closely packed in a suite on-chain and off-chain.</p>
                    <Grid container spacing={0}>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <div className="bg-feature">
                                <img src="https://cosmos.network/_nuxt/img/c72b5e1.svg" alt="coin" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <div className="bg-feature">
                                <img src="https://cosmos.network/_nuxt/img/c72b5e1.svg" alt="coin" />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <div className="bg-feature">
                                <img src="https://cosmos.network/_nuxt/img/c72b5e1.svg" alt="coin" />

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <div className="bg-feature">
                                <img src="https://cosmos.network/_nuxt/img/c72b5e1.svg" alt="coin" />

                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Feature
