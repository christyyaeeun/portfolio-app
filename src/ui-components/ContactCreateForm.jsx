/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { useColorModeValue } from "@chakra-ui/react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Contact } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
import { Input, Textarea, FormLabel, Text, } from "@chakra-ui/react";

export default function ContactCreateForm(props) {
  const textMode = useColorModeValue('#2c2c2c', 'white')
  const btnBg = useColorModeValue('blue.300', 'blue.200')
  const inputColor = useColorModeValue("black", "white");

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
    phone: "",
    email: "",
    message: "",
  };
  const [ name, setName ] = React.useState(initialValues.name);
  const [ phone, setPhone ] = React.useState(initialValues.phone);
  const [ email, setEmail ] = React.useState(initialValues.email);
  const [ message, setMessage ] = React.useState(initialValues.message);
  const [ errors, setErrors ] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setPhone(initialValues.phone);
    setEmail(initialValues.email);
    setMessage(initialValues.message);
    setErrors({});
  };
  const validations = {
    name: [],
    phone: [ { type: "Phone" } ],
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
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={ async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          phone,
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
          await DataStore.save(new Contact(modelFields));
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
      { ...getOverrideProps(overrides, "ContactCreateForm") }
      { ...rest }
    >
      <FormLabel mb="-1em" fontSize="lg">Full Name</FormLabel>
      <TextField
        color={ inputColor }
        isRequired={ false }
        isReadOnly={ false }
        placeholder="First and last name"
        value={ name }
        onChange={ (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              phone,
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
      <FormLabel color={ textMode } mb="-1em" fontSize="lg">Phone</FormLabel>

      <TextField
        color={ textMode }
        isRequired={ false }
        isReadOnly={ false }
        placeholder="111-111-1111"
        type="tel"
        value={ phone }
        onChange={ (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone: value,
              email,
              message,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        } }
        onBlur={ () => runValidationTasks("phone", phone) }
        errorMessage={ errors.phone?.errorMessage }
        hasError={ errors.phone?.hasError }
        { ...getOverrideProps(overrides, "phone") }
      ></TextField>
      <FormLabel color={ textMode } mb="-1em" fontSize="lg">Email</FormLabel>

      <TextField
        color={ textMode }
        isRequired={ true }
        isReadOnly={ false }
        placeholder="Enter email"
        value={ email }
        onChange={ (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
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
      <FormLabel color={ textMode } mb="-1em" fontSize="lg">Message</FormLabel>

      <TextAreaField
        color={ textMode }
        isRequired={ true }
        isReadOnly={ false }
        placeholder="Enter message"
        onChange={ (e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phone,
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
          color={ textMode }
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
            variant="outline"
            className="submit-btn"
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
