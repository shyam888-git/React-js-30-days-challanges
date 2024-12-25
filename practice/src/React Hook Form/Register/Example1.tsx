import { useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  age: number;
};
const Example1 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isDirty, touchedFields },
  } = useForm<FormInputs>({
    defaultValues: { name: "", age: 0 },
  });

  console.log(touchedFields, "touchedFields===>");
  const onSubmit = (data: FormInputs) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="enter name" />
      <br />
      <br />
      <input {...register("age")} placeholder="enter age" />
      <input type="submit" />
    </form>
  );
};

export default Example1;
