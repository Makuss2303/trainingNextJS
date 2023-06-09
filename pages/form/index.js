import Layout from "@/components/templates/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function About() {
  const router = useRouter();
  const [loadingScreen, setLoadingScreen] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log("loading screen 1", loadingScreen);
    setLoadingScreen(true);
    axios
      .post(
        "http://bt3.test/wp-json/contact-form-7/v1/contact-forms/145/feedback",
        data,
        {
          headers: {
            Accept: "application/json",
            "Content-type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        if (
          response.data.status === "mail_sent" &&
          response.data.invalid_fields !== []
        )
          console.log(response.data);
        localStorage.setItem("send_mail", true);
        setLoadingScreen(false);
        console.log("loading screen 2", loadingScreen);
        router.push("/thank-you");
      });
  };
  if (loadingScreen) {
    return (
      <Layout>
        <div className="container">
          <div className="spinner-wrapper">
            <div className="spinner" />
          </div>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div id="form">
        <div className="container">
          <h2 className="form__title">FORM</h2>
          <div className="contact__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    Company<sub className="contact__form__required">*</sub>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    type="text"
                    {...register("company", {
                      required: "*This input is required.",
                      maxLength: {
                        value: 80,
                        message: "*Can't enter more than 20 characters",
                      },
                    })}
                  />
                  {errors.company && (
                    <p className="error_message">{errors.company.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    Name<sub className="contact__form__required">*</sub>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    type="text"
                    {...register("name", {
                      required: "*This input is required.",
                      maxLength: {
                        value: 80,
                        message: "*Can't exceed 80 characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <p className="error_message">{errors.name.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>Gender</label>
                </div>
                <div className="col-sm-10 gender-element">
                  <input
                    {...register("gender", { required: "*Please choose one." })}
                    type="radio"
                    value="Male"
                    id="gender_male"
                  />
                  <label htmlFor="gender_male">Male</label>
                  <input
                    {...register("gender", { required: "*Please choose one." })}
                    type="radio"
                    value="Female"
                    id="gender_female"
                  />
                  <label htmlFor="gender_female">Female</label>
                  {errors.gender && (
                    <p className="error_message">{errors.gender.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    Education<sub className="contact__form__required">*</sub>
                  </label>
                </div>
                <div className="col-sm-10 education-element">
                  <select
                    defaultValue={"default"}
                    {...register("education", {
                      required: true,
                      validate: (value) => {
                        if (value === "default") {
                          return "*Please select an option";
                        }
                        return true;
                      },
                    })}
                  >
                    <option value="default" disabled>
                      -- select an option --
                    </option>
                    <option value="University">University</option>
                    <option value="College">College</option>
                    <option value="High School">High School</option>
                  </select>
                  {errors.education && (
                    <p className="error_message">{errors.education.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    Address<sub className="contact__form__required">*</sub>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    type="text"
                    {...register("address", {
                      required: "*This input is required.",
                    })}
                  />
                  {errors.address && (
                    <p className="error_message">{errors.address.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    Email<sub className="contact__form__required">*</sub>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Email"
                    {...register("email", {
                      required: "*This input is required.",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "*This is not an email.",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="error_message">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    Phone Number<sub className="contact__form__required">*</sub>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    type="tel"
                    {...register("phone_number", {
                      required: "*This input is required.",
                      minLength: {
                        value: 6,
                        message:
                          "*The phone number must be more than 6 digits.",
                      },
                      maxLength: {
                        value: 15,
                        message:
                          "*The phone number must be less than 15 digits.",
                      },
                      pattern: {
                        value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                        message: "*Invalid phone number.",
                      },
                    })}
                  />
                  {errors.phone_number && (
                    <p className="error_message">
                      {errors.phone_number.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>Subject</label>
                </div>
                <div className="col-sm-10">
                  <input type="text" {...register("subject")} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>Message</label>
                </div>
                <div className="col-sm-10">
                  <textarea rows="6" {...register("message")} />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>File</label>
                </div>
                <div className="col-sm-10">
                  <label htmlFor="myfile">Select a file:</label>
                  <p>
                    <input
                      {...register("picture", {
                        validate: (value) => {
                          if (
                            value[0] !== undefined &&
                            !value[0].type.includes("image/")
                          ) {
                            return "*Select Image type only";
                          }
                          return true;
                        },
                      })}
                      type="file"
                      id="picture"
                    />
                  </p>
                  {errors.picture && (
                    <p className="error_message">{errors.picture.message}</p>
                  )}
                </div>
              </div>
              <div className="row-custom">
                <input class="btn-custom" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
