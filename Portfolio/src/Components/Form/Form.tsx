// Zod Packages
import { z } from "zod";

// React hook forms Packages
import { useForm } from "react-hook-form";
import { resolver, zodResolver } from "@hookform/resolvers/zod";

// Zod validation
const schema = z.object({
  name: z.string().min(1, "Digite seu nome."),
  email: z.string().email("Digite um e-mail válido."),
  message: z
    .string()
    .min(10, "Sua messagem precisar ter no mínimo 10 caracteres."),
});

type formProps = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    mode: "onBlur",
    resolver: zodResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(handleForm)}
        className="flex flex-col gap-2 "
      >
        <label htmlFor="name">_name:</label>
        <input
          placeholder="name"
          type="text"
          {...register("name")}
          className="p-1 rounded bg-[#011221] border border-secondary shadow-sm shadow-secondary"
        />
        {errors.name && (
          <p className="text-sm text-orange">{errors.name.message}</p>
        )}

        <label htmlFor="email">_email:</label>
        <input
          placeholder="email"
          type="email"
          {...register("email")}
          className="p-1 rounded bg-[#011221] border border-secondary shadow-sm shadow-secondary"
        />

        {errors.email && (
          <p className="text-sm text-orange">{errors.email.message}</p>
        )}

        <label htmlFor="message">_message</label>
        <input
          placeholder="Enter your message"
          type="text"
          {...register("message")}
          className="p-1 rounded bg-[#011221] border border-secondary shadow-sm shadow-secondary"
        />
        {errors.message && (
          <p className="text-sm text-orange">{errors.message.message}</p>
        )}

        <button
          type="submit"
          className="bg-[#1C2B3A] text-primary rounded p-1 w-24"
        >
          Send
        </button>
      </form>
    </>
  );
}
