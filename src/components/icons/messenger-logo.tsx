import * as React from 'react';

const MessengerLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.223 0 4.302-.613 6.096-1.684l3.216 1.684-1.255-3.084A11.95 11.95 0 0 0 24 12c0-6.627-5.373-12-12-12zm-2.14 13.62l-2.05-2.05 4.93-4.93 2.05 2.05-4.93 4.93zm6.3-2.05l-4.93 4.93-2.05-2.05 4.93-4.93 2.05 2.05z" />
  </svg>
);

export default MessengerLogo;
