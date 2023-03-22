import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Container, useColorModeValue } from '@chakra-ui/react'
import { ChevronLeftIcon } from "@chakra-ui/icons";

function BackButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }

    return (
        <Container m={ '0' } pl={ '4' } width={ '100%' } h={ '50px' } position={'absolute'}>

            <IconButton w='10' height='10' bg={ 'inherit' } color={ useColorModeValue('black','white')} aria-label='Search database' onClick={ handleClick } icon={ <ChevronLeftIcon /> } />

        </Container>
    )
}

export default BackButton

