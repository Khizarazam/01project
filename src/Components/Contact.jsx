import React from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    
    // Check if at least one field is filled
    let isAnyFieldFilled = false;
    for (let [key, value] of formData.entries()) {
      if (key !== 'access_key' && value.trim() !== '') {
        isAnyFieldFilled = true;
        break;
      }
    }
  
    if (!isAnyFieldFilled) {
      alert("Please fill at least one field before submitting.");
      return;
    }

    const isConfirmed = window.confirm("Do you want to send this message to Khizar Choudhary?");
  
    if (!isConfirmed) {
      return;
    }

    formData.append("access_key", "24f96a7c-9c94-4d29-be7e-0b6e2b182a87");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const result = await res.json();
  
      if (result.success) {
        alert("Your message has been sent successfully!");
        event.target.reset();
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };
  
  
  return (
    <>
      <div name="Contact Me" className="py-16 grid items-center">
        <h1 className="text-5xl font-semibold text-center">
          Contact <span className="text-[#0ef]">Me</span>
        </h1>
        <form action="" onSubmit={onSubmit}>
          <div className="md:flex w-full justify-center md:space-y-0 space-y-4 md:space-x-6 grid items-center mt-6">
            <div className="md:w-[30%] w-[300px]"><input type="text"  placeholder="Full Name" className="bg-transparent px-1 placeholder:text-white py-2 outline-none border-2 border-[#0ef] h-10 w-full"/></div>
            <div className="md:w-[30%] w-[300px]"><input type="email" placeholder="Email" className="bg-transparent px-1 placeholder:text-white py-2 outline-none border-2 border-[#0ef] h-10 w-full" /></div>
          </div>
          <div className="md:flex w-full justify-center md:space-y-0 space-y-4  md:space-x-6 grid items-center mt-10">
            <div className="md:w-[30%] w-[300px]"><input type="text"  placeholder="Contact No" className="bg-transparent px-1 placeholder:text-white py-2 outline-none border-2 border-[#0ef] h-10 w-full"/></div>
            <div className="md:w-[30%] w-[300px]"><input type="email" placeholder="Submit Email" className="bg-transparent px-1 placeholder:text-white py-2 outline-none border-2 border-[#0ef] h-10 w-full" /></div>
          </div>
          <div className="w-full mt-10 flex justify-center items-center">
            <div className="md:w-[63%] sm:w-[630px] w-[300px] ">
               <textarea name="text" id="messege" placeholder="Messege" className="w-full placeholder:text-white px-2 py-2 outline-none h-[300px] bg-transparent border-2 border-[#0ef]"></textarea>
            </div>
          </div>
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
