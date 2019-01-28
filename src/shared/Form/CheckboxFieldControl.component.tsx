import * as React from 'react';

import { Checkbox } from 'primereact/checkbox';

import { FormControl } from 'react-reactive-form';

export const CheckboxFieldControl = ({ value, setValue }: FormControl) => (
    <Checkbox checked={value}
              onChange={({ checked }: { checked: boolean }) => setValue(checked)} />
);