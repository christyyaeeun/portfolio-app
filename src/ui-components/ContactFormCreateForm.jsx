/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Flex,
  Grid,
  TextAreaField,
  TextField,
  Button,
} from "@aws-amplify/ui-react";
import {
  Text,
  useColorModeValue,

} from '@chakra-ui/react'
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ContactForm } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ContactFormCreateForm(props) {

const color=useColorModeValue('black', 'white') 

  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    number: "",
    email: "",
    message: "",
  };
  const [ name, setName ] = React.useState(initialValues.name);
  const [ number, setNumber ] = React.useState(initialValues.number);
  const [ email, setEmail ] = React.useState(initialValues.email);
  const [ message, setMessage ] = React.useState(initialValues.message);
  const [ errors, setErrors ] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setNumber(initialValues.number);
    setEmail(initialValues.email);
    setMessage(initialValues.message);
    setErrors({});
  };
  const validations = {
    name: [ { type: "Required" } ],
    number: [ { type: "Required" }, { type: "Phone" } ],
    email: [ { type: "Required" }, { type: "Email" } ],
    message: [ { type: "Required" } ],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[ fieldName ]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [ fieldName ]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="10px"
      columnGap="15px"
      padding="20px"
      onSubmit={ async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          number,
          email,
          message,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[ fieldName ])) {
              promises.push(
                ...modelFields[ fieldName ].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[ fieldName ])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([ key, value ]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[ key ] = undefined;
            }
          });
          await DataStore.save(new ContactForm(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      } }
      { ...getOverrideProps(overrides, "ContactFormCreateForm") }
      { ...rest }
    >
      <Text className="form-label" color={color}>Name</Text>
      <TextField
        isRequired={ true }
        isReadOnly={ false }
        value={ name }
        onChange={ (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              number,
              email,
              message,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        } }
        onBlur={ () => runValidationTasks("name", name) }
        errorMessage={ errors.name?.errorMessage }
        hasError={ errors.name?.hasError }
        { ...getOverrideProps(overrides, "name") }
      ></TextField>

      <Text className="form-label"  color={color}>Number</Text>
      <TextField
        isRequired={ true }
        isReadOnly={ false }
        type="tel"
        value={ number }
        onChange={ (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number: value,
              email,
              message,
            };
            const result = onChange(modelFields);
            value = result?.number ?? value;
          }
          if (errors.number?.hasError) {
            runValidationTasks("number", value);
          }
          setNumber(value);
        } }
        onBlur={ () => runValidationTasks("number", number) }
        errorMessage={ errors.number?.errorMessage }
        hasError={ errors.number?.hasError }
        { ...getOverrideProps(overrides, "number") }
      ></TextField>

      <Text className="form-label" color={ color }>Email</Text>
      <TextField
        isRequired={ true }
        isReadOnly={ false }
        value={ email }
        onChange={ (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              email: value,
              message,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        } }
        onBlur={ () => runValidationTasks("email", email) }
        errorMessage={ errors.email?.errorMessage }
        hasError={ errors.email?.hasError }
        { ...getOverrideProps(overrides, "email") }
      ></TextField>

      <Text className="form-label" color={ color }>Message</Text>
      <TextAreaField
        isRequired={ true }
        isReadOnly={ false }
        onChange={ (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              number,
              email,
              message: value,
            };
            const result = onChange(modelFields);
            value = result?.message ?? value;
          }
          if (errors.message?.hasError) {
            runValidationTasks("message", value);
          }
          setMessage(value);
        } }
        onBlur={ () => runValidationTasks("message", message) }
        errorMessage={ errors.message?.errorMessage }
        hasError={ errors.message?.hasError }
        { ...getOverrideProps(overrides, "message") }
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        { ...getOverrideProps(overrides, "CTAFlex") }
      >
        <Button
        color={useColorModeValue('black','white')}
        variant="outline"
          children="Clear"
          type="reset"
          onClick={ (event) => {
            event.preventDefault();
            resetStateValues();
          } }
          { ...getOverrideProps(overrides, "ClearButton") }
        ></Button>
        <Flex
          gap="15px"
          { ...getOverrideProps(overrides, "RightAlignCTASubFlex") }
        >
          <Button
            backgroundColor={ useColorModeValue('#8e9fa0','#9be1d880')}
            color={ useColorModeValue('white', 'white') }

            children="Submit"
            type="submit"
            isDisabled={ Object.values(errors).some((e) => e?.hasError) }
            { ...getOverrideProps(overrides, "SubmitButton") }
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
