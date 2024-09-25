import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { Icon } from '../../../components/Icon/Icon';
import { Text } from '../../../components/Text/Text';
import { Screen } from '../../../components/Screen/Screen';
import { Button } from '../../../components/Button/Button';
import { RootStackParamList } from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'Success'>;

export function SuccessScreen({ route }: ScreenProps) {

    function goBackToBegin() {
        // TODO: Implement navigation to the first screen
    }

    return (
        <Screen>
            <Icon {...route.params.icon} />
            <Text preset="headingLarge" mt="s24">{ route.params.title }</Text>
            <Text preset="paragraphLarge" mt="s16">{ route.params.description }</Text>
            <Button title="Voltar ao início" onPress={goBackToBegin} mt="s40" />
        </Screen>
    );
}
