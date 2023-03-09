import React from 'react';
import {
  Label, TextInput, Button, Checkbox,
} from 'flowbite-react';
import '../styles/Signup.scss';

function Signup() {
  return (
    <div id="main">
      <form className="flex flex-col gap-4">
        <div>
          <TextInput
            id="email1"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <TextInput
            id="password1"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="flex items-center gap-2 text-white">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-white">
            Remember me
          </Label>
        </div>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Signup;
