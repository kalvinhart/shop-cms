import { useEffect } from "react";

export const useForm = (defaultValues, reset, isSubmitSuccessful) => {
  useEffect(() => {
    reset({
      ...defaultValues,
    });
  }, [defaultValues]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
};
