// EmailJS Packages
import emailjs from "@emailjs/browser";

// Zod Packages
import { z } from "zod";

// React hook forms Packages
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

// Zod validation
const schema = z.object({
  name: z.string().min(1, "Digite seu nome."),
  email: z.string().email("Digite um e-mail válido."),
  body: z
    .string()
    .min(10, "Sua messagem precisar ter no mínimo 10 caracteres.")
    .max(255, "Máximo de caracteres suportados é de 255."),
});

type formProps = z.infer<typeof schema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formProps>({
    mode: "onBlur",
    resolver: zodResolver(schema)
  });

  const sendEmail = (formData) => {
    const templateParams = {
      from_name: formData.name,
      message: formData.body,
      email: formData.email,
    };
    emailjs
      .send(
        "service_vvpri2o",
        "template_78g9wbb",
        templateParams,
        "gH9LUCHOxnCrPkdSg"
      )
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(sendEmail)} className="flex flex-col gap-2 ">
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

        <label htmlFor="body">_body</label>
        <textarea
          placeholder="Enter your message"
          maxLength={255}
          {...register("body")}
          className="h-24 p-1 rounded bg-[#011221] border border-secondary shadow-sm shadow-secondary"
        />
        {errors.body && (
          <p className="text-sm text-orange">{errors.body.message}</p>
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
