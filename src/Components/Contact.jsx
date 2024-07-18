import React from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "24f96a7c-9c94-4d29-be7e-0b6e2b182a87");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <>
      <div name="Contact Me" className="py-16 px-10 md:px-64">
        <h1 className="text-5xl font-semibold text-center">
          Contact <span className="text-[#0ef]">Me</span>
        </h1>
        <form action="" onSubmit={onSubmit}>
          <div className="space-x-5 space-y-16">
            <input
              type="text"
              name="text"
              placeholder="Full name"
              className=" placeholder:text-white bg-transparent border-2 text-white outline-none py-2 px-1  w-[200px] md:w-[350px] border-[#0ef] rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className=" placeholder:text-white bg-transparent border-2 text-white outline-none py-2 px-1 w-[200px] md:w-[350px] border-[#0ef] rounded-md"
            />
          </div>
          <div className="space-x-5 space-y-6">
            <input
              type="text"
              name="text"
              placeholder="Mobile number"
              className=" placeholder:text-white bg-transparent border-2 text-white outline-none py-2 px-1 w-[200px] md:w-[350px] border-[#0ef] rounded-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Submit"
              className=" placeholder:text-white bg-transparent border-2 text-white outline-none py-2 px-1 w-[200px] md:w-[350px] border-[#0ef] rounded-md"
            />
          </div>
          <textarea
            name="massege"
            id=""
            placeholder="Massege"
            className="md:w-[96%] w-full h-[300px] mt-6 placeholder:text-white bg-transparent border-2 text-white outline-none py-2 px-1 border-[#0ef] rounded-md"
          ></textarea>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="py-2 px-4 bg-white mt-6 text-blue-500 text-xl font-semibold rounded-md"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
