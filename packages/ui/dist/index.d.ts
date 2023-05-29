import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;
type Props$1 = ButtonOrLinkProps & {
    label?: string;
};

declare const Button: ({ intent, fullWidth, variant, ...props }: Props) => JSX.Element;
declare const buttonStyles: (props?: ({
    intent?: "primary" | "secondary" | "danger" | null | undefined;
    variant?: "text" | "outlined" | "filled" | null | undefined;
    fullWidth?: boolean | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface Props extends Props$1, VariantProps<typeof buttonStyles> {
}

export { Button, Props };
