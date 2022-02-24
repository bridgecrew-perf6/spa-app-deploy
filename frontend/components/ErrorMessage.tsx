import { FormHelperText } from "@chakra-ui/form-control";
import { ReactElement } from "react";
import { FieldError } from "react-hook-form";

interface IProps {
  error?: FieldError;
}

const errorToMessage = (error: FieldError): string | undefined => {
  switch (error.type) {
    case "required":
      return "必須項目です";
    default:
      return error.message;
  }
};

export const ErrorMessage = ({ error }: IProps): ReactElement | null => {
  if (error == null) return null;
  return (
    <FormHelperText textColor="crimson">{errorToMessage(error)}</FormHelperText>
  );
};
