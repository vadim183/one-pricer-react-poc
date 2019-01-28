import * as React from 'react';
import { FieldGroup, FieldControl } from 'react-reactive-form';

import { Button } from 'primereact/components/button/Button';

import { ItemDTO } from '@api/item-dto.model';

import { ItemFormGroup } from './item-form-group';
import { ItemFormFieldControls } from './item-form-field-controls';
import { ItemFormField } from './item-form-field.model';

import './ItemForm.component.scss';

interface ItemFormProps {
    item: ItemDTO;
    updateItem: (item: ItemDTO) => void;
}

export class ItemForm extends React.Component<ItemFormProps> {
    itemFormGroup = ItemFormGroup;

    componentDidUpdate() {
        if (this.props.item) {
            this.setFrom(this.props.item.title, this.props.item.completed);
        } else {
            this.setFrom('', false);
        }
    }

    onUpdate() {
        if (!this.itemFormGroup.valid) {
            return;
        }

        this.props.updateItem({
            id: this.props.item.id,
            userId: this.props.item.userId,
            title: this.itemFormGroup.controls.title.value,
            completed: this.itemFormGroup.controls.completed.value
        });
    }

    render() {
        return (
            <div className="op-item-details-form">
                <FieldGroup
                    control={this.itemFormGroup}
                    render={() => (
                        <form>
                            {ItemFormFieldControls.map((field, index) =>
                                <div key={index}
                                     className="op-item-details-form_control">
                                    <FieldControl
                                        name={field.name}
                                        render={field.render}
                                    />
                                </div>
                            )}
                        </form>
                    )}
                />
                <Button label="Update"
                        onClick={this.onUpdate.bind(this)} />
            </div>
        );
    }

    private setFrom(title: string, completed: boolean) {
        this.itemFormGroup.controls[ItemFormField.Title].setValue(title);
        this.itemFormGroup.controls[ItemFormField.Completed].setValue(completed);
    }
}
