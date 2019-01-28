import { CheckboxFieldControl, FormFieldControl, TextFieldControl } from '@shared/Form';

import { ItemFormField } from './item-form-field.model';

export const ItemFormFieldControls: Array<FormFieldControl<ItemFormField>> = [
    {
        name: ItemFormField.Title,
        render: TextFieldControl
    },
    {
        name: ItemFormField.Completed,
        render: CheckboxFieldControl
    }
];