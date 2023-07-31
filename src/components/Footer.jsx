import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <div className="text-kinda-white bg-default-bg w-full text-center p-3 font-custom text-lg items-center h-auto pt-20 pb-10">
      <p className="font-headers font-light text-xl pb-3">
        designed and created by bryan {""}
        <span className="text-text-purple">yam</span>
      </p>
      <div className="flex w-full place-content-center gap-5">
        <div>
          <a href="mailto:b2yam@uwaterloo.ca" target="_blank" rel="noreferrer">
            <EnvelopeIcon className="w-6" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/bryanyam/"
            target="_blank"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
