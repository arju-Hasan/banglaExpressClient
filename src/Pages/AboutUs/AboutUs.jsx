import { useState } from "react";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("story");

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">About Us</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. 
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {["story", "mission", "success", "team"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-lg font-medium rounded-t-xl transition-all ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab === "story" && "Story"}
              {tab === "mission" && "Mission"}
              {tab === "success" && "Success"}
              {tab === "team" && "Team & Others"}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16 border border-gray-100">

          {/* Story */}
          {activeTab === "story" && (
            <div className="text-lg text-gray-700 space-y-6">
              <h2 className="text-3xl font-bold text-primary mb-8">Our Story</h2>
              <p className="leading-relaxed">
                We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. 
                Over the years, our commitment to real-time tracking, efficient logistics, and customer-first 
                service has made us a trusted partner for thousands.
              </p>
              <p className="leading-relaxed">
                Whether it’s a personal gift or a time-sensitive business delivery, we ensure it reaches its 
                destination — on time, every time.
              </p>
            </div>
          )}

          {/* Mission */}
          {activeTab === "mission" && (
            <div className="text-lg text-gray-700 space-y-8">
              <h2 className="text-3xl font-bold text-primary text-center mb-10">Our Mission</h2>
              <div className="text-center max-w-3xl mx-auto">
                <p className="text-xl leading-relaxed">
                  To revolutionize parcel delivery by combining cutting-edge technology with unmatched reliability, 
                  making every shipment seamless, transparent, and delivered exactly when promised.
                </p>
              </div>
            </div>
          )}

          {/* Success */}
          {activeTab === "success" && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-12">Success in Numbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-teal-50 rounded-2xl p-8">
                  <div className="text-5xl font-bold text-primary">500K+</div>
                  <p className="text-xl mt-3 text-gray-700">Parcels Delivered</p>
                </div>
                <div className="bg-teal-50 rounded-2xl p-8">
                  <div className="text-5xl font-bold text-primary">99.7%</div>
                  <p className="text-xl mt-3 text-gray-700">On-Time Rate</p>
                </div>
                <div className="bg-teal-50 rounded-2xl p-8">
                  <div className="text-5xl font-bold text-primary">50+</div>
                  <p className="text-xl mt-3 text-gray-700">Cities Covered</p>
                </div>
              </div>
            </div>
          )}

          {/* Team & Others */}
          {activeTab === "team" && (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-primary mb-12">Our Team & Partners</h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Behind every successful delivery is a dedicated team of logistics experts, drivers, 
                customer support heroes, and technology innovators — all working 24/7 to keep your 
                packages moving smoothly across the country.
              </p>
              <p className="text-lg text-gray-600 mt-8">
                Together with our nationwide network of partners, we make sure your trust is never broken.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}