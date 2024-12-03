import { useMutation } from "@tanstack/react-query";
import postContact from "./postContact";

const Form = () => {
  const mutation = useMutation({
    mutationFn: (formData: FormData) => {
      return postContact(
        formData.get("name") as string,
        formData.get("email") as string,
        formData.get("message") as string,
      );
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate(formData);
  };

  return (
    <div>
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted!</h3>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Your Email:
            <input type="email" name="email" />
          </label>
          <label>
            Your message:
            <textarea name="message" />
          </label>
          <button>Submit</button>
        </form>
      )}
    </div>
  );
};

export default Form;
