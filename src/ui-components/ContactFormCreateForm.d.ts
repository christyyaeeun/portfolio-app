/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContactFormCreateFormInputValues = {
    name?: string;
    number?: string;
    email?: string;
    message?: string;
};
export declare type ContactFormCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    number?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactFormCreateFormOverridesProps = {
    ContactFormCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    number?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ContactFormCreateFormProps = React.PropsWithChildren<{
    overrides?: ContactFormCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContactFormCreateFormInputValues) => ContactFormCreateFormInputValues;
    onSuccess?: (fields: ContactFormCreateFormInputValues) => void;
    onError?: (fields: ContactFormCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContactFormCreateFormInputValues) => ContactFormCreateFormInputValues;
    onValidate?: ContactFormCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContactFormCreateForm(props: ContactFormCreateFormProps): React.ReactElement;
