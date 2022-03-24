import * as React from "react";

type FormState = Record<string, any>;

interface FormProps<T> {
  initialState?: T;
  initialStep: number;
  render: (formState: {
    state: T;
    setState: React.Dispatch<React.SetStateAction<T>>;
    step: number;
    setStep: React.Dispatch<React.SetStateAction<number>>;
  }) => JSX.Element;
}

const Form = <TState extends Record<string, any>>({
  initialState = {} as TState,
  initialStep,
  render,
}: FormProps<TState>) => {
  const [state, setState] = React.useState<TState>(initialState);
  const [step, setStep] = React.useState(initialStep);

  return render({ state, setState, step, setStep });
};

// Used as

const Test = () => {
  return (
    <Form<{ date: string }>
      initialStep={0}
      render={({ state, setState, step, setStep }) => <p>Form goes here</p>}
    />
  );
};
