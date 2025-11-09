import React, { useState } from 'react';

const PreOrderModal = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cw: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
    if (!formData.expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
    if (!formData.cw.trim()) newErrors.cw = 'C/W is required';

    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    // Phone validation
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      newErrors.phone = 'Phone must contain only numbers';
    }

    // Card number validation
    if (formData.cardNumber && !/^\d+$/.test(formData.cardNumber)) {
      newErrors.cardNumber = 'Card number must contain only numbers';
    }

    // CVV validation
    if (formData.cw && !/^\d+$/.test(formData.cw)) {
      newErrors.cw = 'C/W must contain only numbers';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Pre-order completed successfully!');
      console.log('Form Data:', formData);
    }
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? All data will be lost.')) {
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        country: '',
        cardNumber: '',
        expiryDate: '',
        cw: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 pt-24 pb-12">
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4">
        {/* Modal Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-8 text-white text-center">
            <h1 className="text-3xl font-bold mb-2">Complete Your Pre-Order</h1>
            <p className="text-amber-100">Secure your copy of our premium publication</p>
          </div>
          
          {/* Content Grid */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column - Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h2 className="text-xl font-bold text-slate-800 mb-4">Order Summary</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-white p-4 rounded-lg border border-slate-200">
                      <div>
                        <span className="font-semibold text-slate-700">Standard Edition</span>
                        <p className="text-sm text-slate-500 mt-1">Hardcover + Digital</p>
                      </div>
                      <span className="text-xl font-bold text-amber-600">$24.99</span>
                    </div>
                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span className="text-amber-600">$24.99</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-2">
                <div className="space-y-8">
                  
                  {/* Personal Information */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                      Personal Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 placeholder-slate-400 text-slate-700 ${
                            errors.fullName ? 'border-red-500' : 'border-slate-300'
                          }`}
                          required
                        />
                        {errors.fullName && (
                          <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                          className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 placeholder-slate-400 text-slate-700 ${
                            errors.phone ? 'border-red-500' : 'border-slate-300'
                          }`}
                          required
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email address"
                          className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 placeholder-slate-400 text-slate-700 ${
                            errors.email ? 'border-red-500' : 'border-slate-300'
                          }`}
                          required
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                      Shipping Address
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Address *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter your street address"
                          className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 placeholder-slate-400 text-slate-700 ${
                            errors.address ? 'border-red-500' : 'border-slate-300'
                          }`}
                          required
                        />
                        {errors.address && (
                          <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Enter your city"
                            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 placeholder-slate-400 text-slate-700 ${
                              errors.city ? 'border-red-500' : 'border-slate-300'
                            }`}
                            required
                          />
                          {errors.city && (
                            <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Country *
                          </label>
                          <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Enter your country"
                            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 placeholder-slate-400 text-slate-700 ${
                              errors.country ? 'border-red-500' : 'border-slate-300'
                            }`}
                            required
                          />
                          {errors.country && (
                            <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 mb-6 pb-2 border-b border-slate-200">
                      Payment Information
                    </h2>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          placeholder="Enter your card number"
                          className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 placeholder-slate-400 text-slate-700 ${
                            errors.cardNumber ? 'border-red-500' : 'border-slate-300'
                          }`}
                          required
                          maxLength="16"
                        />
                        {errors.cardNumber && (
                          <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleChange}
                            placeholder="MM/YYYY"
                            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 placeholder-slate-400 text-slate-700 ${
                              errors.expiryDate ? 'border-red-500' : 'border-slate-300'
                            }`}
                            required
                          />
                          {errors.expiryDate && (
                            <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            C/W *
                          </label>
                          <input
                            type="text"
                            name="cw"
                            value={formData.cw}
                            onChange={handleChange}
                            placeholder="CVV"
                            className={`w-full px-4 py-3 bg-white border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 placeholder-slate-400 text-slate-700 ${
                              errors.cw ? 'border-red-500' : 'border-slate-300'
                            }`}
                            required
                            maxLength="3"
                          />
                          {errors.cw && (
                            <p className="text-red-500 text-xs mt-1">{errors.cw}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Buttons Section */}
          <div className="p-8 bg-slate-50 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <button 
                type="button"
                onClick={handleCancel}
                className="px-8 py-3 border border-slate-300 text-slate-700 rounded-lg font-semibold text-sm hover:bg-slate-100 transition-all duration-200 sm:w-auto w-full"
              >
                Cancel
              </button>
              <button 
                type="submit"
                onClick={handleSubmit}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-semibold text-sm hover:from-amber-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl sm:w-auto w-full"
              >
                Complete Pre-Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreOrderModal;