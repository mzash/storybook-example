import React from 'react';
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
    title: 'Button',
    decorators: [withKnobs]
};

export const buttonWithKnobs = () => {
    const label = text('label', 'Button', 'Наполнение компонента');
    const props = {
        disabled: boolean('disabled', false, 'Состояние кноки')
    };

    // component
    return (
        <button {...props}>
            {label}
        </button>
    );
};

export const buttonWithActions = () => {
    const props = {
        onClick: action('onClick'),
        onMouseOver: action('onMouseOver'),
        onMouseMove: action('onMouseMove'),
        onMouseOut: action('onMouseOut'),
    };

    // component
    return (
        <button {...props}>button</button>
    );
};
