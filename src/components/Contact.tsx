import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      form.current === null ||
      form.current.user_name.value === "" ||
      form.current.user_email.value === "" ||
      form.current.message.value === ""
    )
      return alert("Please fill all the fields");

    const result = await emailjs.sendForm(
      "service_bpdee0h",
      "template_ozf2b6g",
      form.current,
      "FWs2iXRB5REQskaqh"
    );

    if (result.status === 200) {
      alert("Email sent successfully");
    } else {
      alert("Something went wrong");
    }

    form.current.reset();
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl text-center font-extralight md:text-5xl lg:text-7xl md:text-left mb-14 lg:mb-16">
        <span className="font-bold text-amber-500">Contact</span>
      </h1>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="p-2 rounded-md bg-transparent placeholder-white border-white border outline-none focus:border-amber-500"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="p-2 rounded-md bg-transparent placeholder-white border-white border outline-none focus:border-amber-500"
        />
        <textarea
          name="message"
          placeholder="Enter message"
          className="p-2 rounded-md bg-transparent placeholder-white border-white border outline-none focus:border-amber-500"
          rows={10}
        />
        <button
          type="submit"
          className="bg-amber-500 md:text-xl p-2 rounded-md font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
