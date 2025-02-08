import React from 'react';

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 absolute inset-x-0 bottom-0">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/rvrutan" className="link link-hover text-lg">
            Roni v. Rutan
          </a>
          <span>|</span>
          <a href="https://github.com/SamanthaMakowski" className="link link-hover text-lg">
            Samantha Makowski
          </a>
          <span>|</span>
          <a href="https://github.com/Lindseyt75" className="link link-hover text-lg">
            Timothy Lindsey
          </a>
          <span>|</span>
          <a href="https://github.com/xBenCookx" className="link link-hover text-lg">
            Ben Cook
          </a>
        </div>
      </div>
    </footer>
  );
}