import React, { useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    topic: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Send the email
    emailjs.send('service_27al8ux', 'template_d11y0qg', formData, 'GXi-JhoKe7IM5tmqe')
      .then((result) => {
          console.log(result.text);
          // Reset form fields after successful email submission
          setFormData({
            topic: "",
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            country: "",
            message: "",
          });
          alert("Your message has been sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send the message. Please try again.");
      });
  };


  return (
    <div className="py-10">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-2 px-24">
        <div className="lg:col-span-1 hidden md:block">
          <div className="flex flex-col px-5">
            <a
              href="/GetAQuote"
              className="pl-8 py-2 font-semibold border border-gray-600"
            >
              Contact us
            </a>
            <a
              href="/GetAQuote"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              Get a Quote
            </a>
            <a
              href="#"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              Billing & Payments
            </a>
            <a
              href="/ShippingAndDelivery"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              Shipping & Delivery
            </a>
            <a
              href="#"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              Customs Duty
            </a>
            <a
              href="#"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              Trak Your Orders
            </a>
            <a
              href="/Earp"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              Return & Exchange
            </a>
            <a
              href="/PrivacyPolicy"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              Privacy & Policy
            </a>
            <a
              href="/Tac"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              Degital Business Identity
            </a>
            <a
              href="#"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              Vat Registration
            </a>
            <a
              href="#"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              BSTI LIcense
            </a>
            <a
              href="/Faq"
              className="pl-8 py-2 bg-gray-200 hover:border hover:bg-white hover:font-semibold hover:border-gray-600"
            >
              FAQ
            </a>
          </div>
        </div>
        <div className="lg:col-span-4 mx-8 md:mx-14">
          <h2 className="font-semibold text-3xl text-gray-800 mb-5">
            Contact us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="md:border-r-2 space-y-8 ">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center p-2 border-2 rounded-full shadow-md bg-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4" // Adjust size as necessary for alignment
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 2.18 2 2 0 0 1 4.08 0h3a2 2 0 0 1 2 1.72c.127.96.362 1.91.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16.013 16.013 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    Hotline
                  </h4>
                  <p className="text-gray-500">(+88) 09666 666 666</p>
                  <p className="text-gray-500">
                    7 days a week, 10:00am to 8:00pm (BST)
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4 pt-16">
                <div className="flex items-center justify-center p-2 border-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4" // Adjust size as necessary for alignment
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 2.18 2 2 0 0 1 4.08 0h3a2 2 0 0 1 2 1.72c.127.96.362 1.91.7 2.81a2 2 0 0 1-.45 2.11L8.09 7.91a16.013 16.013 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">
                    WhatsApp
                  </h4>
                  <p className="text-gray-500">(+88) 09666 666 666</p>
                  <p className="text-gray-500">
                    6 days a week (Saturday to Thursday), 10:00 am to 7:00 pm
                    (BST)
                  </p>
                  <a
                    href="wa.me/+8801616101090"
                    className="underline text-gray-500"
                  >
                    clickhere to live chate
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-row items-center gap-4 md:ml-8">
                <div className="flex items-center justify-center p-2 border-2 rounded-full shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-6 h-6 text-gray-800"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <path d="M22 6l-10 7L2 6"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Email</h4>

                  <a
                    href="mailto:info@hometex.ltd"
                    className="underline text-gray-500"
                  >
                    info@hometex.ltd
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="mt-10" />

          <h4 className="mt-5 font-bold">
            There&apos;s nothing we love to do more than hearing from our
            customers like you. Please fill in your information and we will get
            back to you in no time.
          </h4>

          <form onSubmit={handleSubmit} className="space-y-6 mt-5">
            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-gray-700"
              >
                Select Topic *
              </label>
              <select
                id="topic"
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Please Select</option>
                <option value="customer_service">Customer Service</option>
                <option value="online_orders">Online Orders</option>
                <option value="my_rewards">My Rewards</option>
                <option value="corporate_enquiry">Corporate Enquiry</option>
                <option value="partnership_opportunities">
                  Partnership Opportunities
                </option>
                <option value="general">General</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700"
                >
                  Select Country *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select Country</option>
                  <option value="AF">Afghanistan</option>
                  <option value="AL">Albania</option>
                  <option value="DZ">Algeria</option>
                  <option value="AS">American Samoa</option>
                  <option value="AD">Andorra</option>
                  <option value="AO">Angola</option>
                  <option value="AI">Anguilla</option>
                  <option value="AQ">Antarctica</option>
                  <option value="AG">Antigua and Barbuda</option>
                  <option value="AR">Argentina</option>
                  <option value="AM">Armenia</option>
                  <option value="AW">Aruba</option>
                  <option value="AU">Australia</option>
                  <option value="AT">Austria</option>
                  <option value="AZ">Azerbaijan</option>
                  <option value="BS">Bahamas</option>
                  <option value="BH">Bahrain</option>
                  <option value="BD">Bangladesh</option>
                  <option value="BB">Barbados</option>
                  <option value="BY">Belarus</option>
                  <option value="BE">Belgium</option>
                  <option value="BZ">Belize</option>
                  <option value="BJ">Benin</option>
                  <option value="BM">Bermuda</option>
                  <option value="BT">Bhutan</option>
                  <option value="BO">Bolivia</option>
                  <option value="BA">Bosnia and Herzegovina</option>
                  <option value="BW">Botswana</option>
                  <option value="BR">Brazil</option>
                  <option value="IO">British Indian Ocean Territory</option>
                  <option value="BN">Brunei Darussalam</option>
                  <option value="BG">Bulgaria</option>
                  <option value="BF">Burkina Faso</option>
                  <option value="BI">Burundi</option>
                  <option value="CV">Cabo Verde</option>
                  <option value="KH">Cambodia</option>
                  <option value="CM">Cameroon</option>
                  <option value="CA">Canada</option>
                  <option value="KY">Cayman Islands</option>
                  <option value="CF">Central African Republic</option>
                  <option value="TD">Chad</option>
                  <option value="CL">Chile</option>
                  <option value="CN">China</option>
                  <option value="CX">Christmas Island</option>
                  <option value="CC">Cocos (Keeling) Islands</option>
                  <option value="CO">Colombia</option>
                  <option value="KM">Comoros</option>
                  <option value="CG">Congo</option>
                  <option value="CD">Congo (DRC)</option>
                  <option value="CK">Cook Islands</option>
                  <option value="CR">Costa Rica</option>
                  <option value="CI">Côte d’Ivoire</option>
                  <option value="HR">Croatia</option>
                  <option value="CU">Cuba</option>
                  <option value="CW">Curaçao</option>
                  <option value="CY">Cyprus</option>
                  <option value="CZ">Czech Republic</option>
                  <option value="DK">Denmark</option>
                  <option value="DJ">Djibouti</option>
                  <option value="DM">Dominica</option>
                  <option value="DO">Dominican Republic</option>
                  <option value="EC">Ecuador</option>
                  <option value="EG">Egypt</option>
                  <option value="SV">El Salvador</option>
                  <option value="GQ">Equatorial Guinea</option>
                  <option value="ER">Eritrea</option>
                  <option value="EE">Estonia</option>
                  <option value="SZ">Eswatini</option>
                  <option value="ET">Ethiopia</option>
                  <option value="FK">Falkland Islands (Malvinas)</option>
                  <option value="FO">Faroe Islands</option>
                  <option value="FJ">Fiji</option>
                  <option value="FI">Finland</option>
                  <option value="FR">France</option>
                  <option value="GF">French Guiana</option>
                  <option value="PF">French Polynesia</option>
                  <option value="TF">French Southern Territories</option>
                  <option value="GA">Gabon</option>
                  <option value="GM">Gambia</option>
                  <option value="GE">Georgia</option>
                  <option value="DE">Germany</option>
                  <option value="GH">Ghana</option>
                  <option value="GI">Gibraltar</option>
                  <option value="GR">Greece</option>
                  <option value="GL">Greenland</option>
                  <option value="GD">Grenada</option>
                  <option value="GP">Guadeloupe</option>
                  <option value="GU">Guam</option>
                  <option value="GT">Guatemala</option>
                  <option value="GG">Guernsey</option>
                  <option value="GN">Guinea</option>
                  <option value="GW">Guinea-Bissau</option>
                  <option value="GY">Guyana</option>
                  <option value="HT">Haiti</option>
                  <option value="HM">Heard & McDonald Islands</option>
                  <option value="VA">Holy See (Vatican City State)</option>
                  <option value="HN">Honduras</option>
                  <option value="HK">Hong Kong</option>
                  <option value="HU">Hungary</option>
                  <option value="IS">Iceland</option>
                  <option value="IN">India</option>
                  <option value="ID">Indonesia</option>
                  <option value="IR">Iran</option>
                  <option value="IQ">Iraq</option>
                  <option value="IE">Ireland</option>
                  <option value="IM">Isle of Man</option>
                  <option value="IL">Israel</option>
                  <option value="IT">Italy</option>
                  <option value="JM">Jamaica</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              ></textarea>
            </div>
            <p>
              {" "}
              Note: All fields are mandatory <span className="text-red">*</span>
            </p>

            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
