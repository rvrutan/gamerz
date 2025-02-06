import React from 'react';

export default function Footer() {
  return (
    <footer className="footer p-4 bg-neutral text-neutral-content text-center fixed bottom-0 w-full">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/rvrutan" className="link link-hover">
            Roni v. Rutan
          </a>
          <span>|</span>
          <a href="https://github.com/SamanthaMakowski" className="link link-hover">
            Samantha Makowski
          </a>
          <span>|</span>
          <a href="https://github.com/Lindseyt75" className="link link-hover">
            Timothy Lindsey
          </a>
          <span>|</span>
          <a href="https://github.com/xBenCookx" className="link link-hover">
            Ben Cook
          </a>
        </div>
      </div>
    </footer>
  );
}