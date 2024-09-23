import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '../Text/Text';

interface ButtonProps {
    title: string;
}

export function Button({ title }: ButtonProps) {
    return (
        <TouchableOpacity
            style={{
                paddingHorizontal: 20,
                paddingVertical: 14,
                backgroundColor: 'blue',
                alignItems: 'center',
                borderRadius: 16,
            }}>
            <Text preset="paragraphMedium" bold style={{ color: 'white' }}>{title}</Text>
        </TouchableOpacity>
    );
}
