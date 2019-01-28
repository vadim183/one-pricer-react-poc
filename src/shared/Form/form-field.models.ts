import * as React from 'react';

import { FormControl } from 'react-reactive-form';

export interface FormFieldControl<TFormField> {
    name: TFormField;
    render: (formControl: FormControl) => React.ReactElement<any> ;
}