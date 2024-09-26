import React from 'react';
import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { PasswordInput, PasswordInputProps } from '../PasswordInput/PasswordInput';

export function FormPasswordTextInput<FormType extends FieldValues>({
    control,
    name,
    rules,
    ...textInputRest
}: PasswordInputProps & UseControllerProps<FormType>) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
                <PasswordInput
                    value={field.value}
                    onChangeText={field.onChange}
                    errorMessage={fieldState.error?.message}
                    {...textInputRest}
                />
            )}
        />
    );
}
