import { FormBuilder, Validators } from 'react-reactive-form';

import { ItemFormField } from './item-form-field.model';

export const ItemFormGroup = FormBuilder.group({
    [ItemFormField.Title]: ['', Validators.required],
    [ItemFormField.Completed]: [false]
});