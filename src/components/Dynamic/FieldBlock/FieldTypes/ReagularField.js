import React from 'react'
import { TextField } from '@material-ui/core'

const RegularField = ({ ...others}) => {
    return <TextField {...others}/>
}

export default RegularField