import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    // Add your validation logic here
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First name is required";
      isValid = false;
    } else {
      newErrors.firstName = "";
    }

    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last name is required";
      isValid = false;
    } else {
      newErrors.lastName = "";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required";
      isValid = false;
    } else {
      newErrors.message = "";
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    const isValid = validateForm();

    if (isValid) {
      // Handle form submission (e.g., send data to server)
      console.log("Form data submitted:", formData);
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <form className="form-style" onSubmit={handleSubmit}>
      <label className="label-style">
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <span className="error-message">{formErrors.firstName}</span>
      </label>
      <br />
      <label className="label-style">
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <span className="error-message">{formErrors.lastName}</span>
      </label>
      <br />
      <label className="label-style">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className="error-message">{formErrors.email}</span>
      </label>
      <br />
      <label className="label-style">
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <span className="error-message">{formErrors.message}</span>
      </label>
      <br />
      <button className="submit-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
