import * as React from 'react';

import { InputText } from 'primereact/inputtext';

import { FormControl } from 'react-reactive-form';

export const TextFieldControl = ({ handler }: FormControl) => (
    <InputText  {...handler()} />
);