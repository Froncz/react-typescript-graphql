import React, { useEffect, useState } from "react";
import { useUpdateTaskMutation } from "../generated/graphql";
import { useRouter } from "next/router";

interface Values {
  id: number;
  title: string;
}

interface Props {
  initialValues: Values;
}

const UpdateTaskForm: React.FC<Props> = ({ initialValues }) => {
  const [values, setValues] = useState<Values>(initialValues);
  const handleChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = ev.target;
    setValues((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const [updateTask, { loading, error, data }] = useUpdateTaskMutation();
  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    updateTask({
      variables: {
        input: values,
      },
    });
  };

  const router = useRouter();

  useEffect(() => {
    if (data && data.updateTask) {
      router.push("/");
    }
  }, [data]);

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="alert-">An error occured.</p>}
      <p>
        <label className="field-label">Title</label>
        <input
          type="text"
          name="title"
          className="text-input"
          value={values.title}
          onChange={handleChange}
        />
      </p>
      <p>
        <button type="submit" className="button" disabled={loading}>
          {loading ? "Loading..." : "Save"}
        </button>
      </p>
    </form>
  );
};

export default UpdateTaskForm;
