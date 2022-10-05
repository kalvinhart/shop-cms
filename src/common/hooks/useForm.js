import { useEffect } from "react";

export const useForm = (defaultValues, reset, isSubmitSuccessful) => {
  useEffect(() => {
    reset({
      ...defaultValues,
    });
  }, [reset, defaultValues]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
};
