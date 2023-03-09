import React from 'react';
import { Navbar, Dropdown, Avatar } from 'flowbite-react';
import logo from '../../public/logo.png';

// add state for login component
// cange name
// change icon
// change email
function Header() {
  return (
    <Navbar
      fluid
      rounded
      style={{ backgroundColor: 'transparent' }}
    >
      <Navbar.Brand href="#">
        <img
          src={logo}
          className="mr-6 h-6 sm:h-9"
          alt="Cool Logo"
          style={{ width: '53px', height: '50px' }}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          HowlOut
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              John Doe
            </span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
}

export default Header;
