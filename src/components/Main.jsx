import React, { useState } from "react";

const Main = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    companyName: '',
    companyMail: '',
    ssn: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    city: '',
    state: ''
  });

  const handleChange = (e, field) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const InputField = ({ label, placeholder, type = "text", value, onChange, hasPrefix }) => (
    <div className="w-[332px] h-[77px] flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      {hasPrefix ? (
        <div className="flex h-[45px]">
          <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l">
            +91
          </span>
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full p-2 px-4 border border-gray-300 rounded-r focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full h-[45px] p-2  px-4 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      )}
    </div>
  );

  return (
    <main className="p-8">
      <div className="bg-white rounded-tl-lg border border-gray-200 h-[calc(100vh-101px-64px)] flex flex-col items-center justify-center">
        <div className="w-[1088px] flex flex-col gap-2">
          <div className="flex flex-col gap-[20px]">
            {/* Row 1 */}
            <div className="flex gap-[32px]">
              <InputField
                label="Name"
                placeholder="Enter Name"
                value={formData.name}
                onChange={(e) => handleChange(e, 'name')}
              />
              <InputField
                label="Contact"
                placeholder="Enter Number here"
                type="tel"
                value={formData.contact}
                onChange={(e) => handleChange(e, 'contact')}
                hasPrefix={true}
              />
              <InputField
                label="Email"
                placeholder="Enter Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange(e, 'email')}
              />
            </div>

            {/* Row 2 */}
            <div className="flex gap-[32px]">
              <InputField
                label="Company Name"
                placeholder="Enter Company"
                value={formData.companyName}
                onChange={(e) => handleChange(e, 'companyName')}
              />
              <InputField
                label="Company Mail"
                placeholder="Enter Mail"
                type="email"
                value={formData.companyMail}
                onChange={(e) => handleChange(e, 'companyMail')}
              />
              <InputField
                label="Social Security Number"
                placeholder="Enter here"
                value={formData.ssn}
                onChange={(e) => handleChange(e, 'ssn')}
              />
            </div>

            {/* Row 3 */}
            <div className="flex gap-[32px]">
              <InputField
                label="Address Line 1"
                placeholder="Door no/Area"
                value={formData.addressLine1}
                onChange={(e) => handleChange(e, 'addressLine1')}
              />
              <InputField
                label="Address Line 2"
                placeholder="Landmark/Street"
                value={formData.addressLine2}
                onChange={(e) => handleChange(e, 'addressLine2')}
              />
              <InputField
                label="Pin Code"
                placeholder="Enter Here"
                value={formData.pinCode}
                onChange={(e) => handleChange(e, 'pinCode')}
              />
            </div>

            {/* Row 4 */}
            <div className="flex gap-[32px]">
              <div className="w-[332px] h-[77px] flex flex-col gap-2">
                <label className="text-sm font-medium">City</label>
                <select
                  value={formData.city}
                  onChange={(e) => handleChange(e, 'city')}
                  className="w-full h-[45px] p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Enter here</option>
                </select>
              </div>
              <div className="w-[332px] h-[77px] flex flex-col gap-2">
                <label className="text-sm font-medium">State</label>
                <select
                  value={formData.state}
                  onChange={(e) => handleChange(e, 'state')}
                  className="w-full h-[45px] p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Enter Here</option>
                </select>
              </div>
            </div>
          </div>

          {/* Button */}
          <button 
            className="w-[158px] h-[56px] mt-16 px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Add Broker
          </button>
        </div>
      </div>
    </main>
  );
};

export default Main;