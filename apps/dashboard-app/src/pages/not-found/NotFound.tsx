import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ExternalLinkIcon, HomeIcon, RefreshCwIcon } from "@ant-design/icons";
import { HomeOutlined, LoadingOutlined, LinkOutlined } from "@ant-design/icons";
import NotFoundAnimation from "./NotFoundAnimation";
import Meteor from "./Metor";
import { Button } from "antd";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        navigate("/");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Meteor className="absolute top-0 left-1/4" />
        <Meteor className="absolute top-10 left-3/4" delay={2} />
        <Meteor className="absolute top-20 left-1/2" delay={3.5} />
        <Meteor className="absolute top-5 left-1/5" delay={1.5} />
        <Meteor className="absolute top-1/3 right-1/4" delay={2.2} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-blue-800 opacity-90 tracking-tighter mb-6">
            404
          </h1>

          <div className="mb-12 mt-4 h-64 relative">
            <NotFoundAnimation />
          </div>

          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Page Not Found
          </h2>

          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved to
            another URL.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="primary"
              size="large"
              onClick={() => navigate(-1)}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-lg border border-primary-200 font-medium hover:bg-gray-50 hover:border-primary-300 transition-all shadow-sm"
            >
              <LoadingOutlined size={18} />
              Go Back
            </Button>

            <Button
              type="primary"
              size="large"
              onClick={() => navigate("/")}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-sm"
            >
              <HomeOutlined size={18} />
              Go Home
            </Button>
          </div>

          <div className="mt-12 text-gray-500">
            Redirecting to home in {countdown} seconds...
          </div>

          <div className="mt-8 text-gray-500 text-sm flex items-center justify-center gap-1">
            <span>Need help?</span>
            <a
              href="#"
              className="text-primary-600 hover:text-primary-700 inline-flex items-center gap-1"
            >
              Contact support
              <LinkOutlined size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
