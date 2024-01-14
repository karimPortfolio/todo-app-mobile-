import React from 'react';
import FontAwsome from 'react-native-vector-icons/FontAwesome'
import type { IconProps } from '../types/Components';
import { View } from 'react-native';



export const Icon: React.FC<IconProps> = ({
    color,
    name,
    size
}) => {

    return(
            <FontAwsome 
            name={name}
            color={color}
            size={size}
            />
    )
}

