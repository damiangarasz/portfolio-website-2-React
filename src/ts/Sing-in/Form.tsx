import { useMutation } from '@tanstack/react-query';
import postContact from './postContact';

export function Form() {
  const mutation = useMutation({
    mutationFn: (formData: FormData) => {
      return postContact(
        formData.get('name') as string,
        formData.get('email') as string,
        formData.get('message') as string
      );
    },
    onSuccess: () => {
      console.log('ja jebie');
    },

    onError: (error) => {
      console.error('Error occurred:', error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    mutation.mutate(formData);
  };

  return (
    <div className="dancing-script-form m-auto mt-10 w-[350px] rounded-sm border border-black shadow-md">
      <h2 className="my-4 text-center text-3xl">Contact</h2>
      {mutation.isSuccess ? (
        <h2 className="text-xl">Submitted!</h2>
      ) : (
        <form
          className="m-auto flex w-[300px] flex-col gap-2"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email" className="sr-only">
            Your Email:
          </label>
          <input
            className="form-imput lato rounded-sm"
            type="email"
            id="email"
            name="email"
            placeholder="email"
          />
          <label htmlFor="message" className="sr-only">
            Your message:
          </label>
          <textarea
            className="form-imput lato rounded-sm"
            id="message"
            name="message"
            placeholder="type something..."
          />
          <button className="my-3 border shadow">Submit</button>
        </form>
      )}
    </div>
  );
}
