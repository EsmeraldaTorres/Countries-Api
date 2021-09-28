import React from "react"

const Details = props => {
    const {name, flags, data} = props
    return (
        <>
        <h1>{name}</h1>
        <img src={flags} alt="country-flag" />
        </>
    )
}

export default Details