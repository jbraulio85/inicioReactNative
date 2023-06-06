import React from 'react';
import {Text} from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props){
    const {name, lastName} = props;
    return <Text>Hola {name} {lastName}</Text>;
}


Saludar.propTypes = {
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
}