import React, { useState } from 'react';
import {
  Label, TextInput, Button, Checkbox,
} from 'flowbite-react';
import '../styles/Signup.scss';

const data = {
  email: '',
  name: '',
  username: '',
  password: '',
  passwordConfirm: '',
};

function Signup() {
  const [formData, setFormData] = useState(data);
  return (
    <div id="content">
      <header>
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Sign Up
        </span>
      </header>
      <form className="flex flex-col gap-4">
        <div>
          <TextInput
            id="fullname"
            type="text"
            placeholder="Name"
            onChange={(e) => { setFormData({ ...formData, name: e.target.value }); }}
            required
          />
        </div>
        <div>
          <TextInput
            id="email"
            type="email"
            placeholder="Email"
            onChange={(e) => { setFormData({ ...formData, email: e.target.value }); }}
            required
          />
        </div>
        <div>
          <TextInput
            id="username"
            type="username"
            placeholder="Username"
            onChange={(e) => { setFormData({ ...formData, username: e.target.value }); }}
            required
          />
        </div>
        <div>
          <TextInput
            id="password1"
            type="password"
            placeholder="Password"
            onChange={(e) => { setFormData({ ...formData, password: e.target.value }); }}
            required
          />
        </div>
        <div>
          <TextInput
            id="password2"
            type="password"
            onChange={(e) => { setFormData({ ...formData, passwordConfirm: e.target.value }); }}
            placeholder="Confirm Password"
            required
          />
        </div>
        <div className="flex items-center gap-2 text-white">
          <Checkbox id="remember" />
          <Label htmlFor="remember" className="text-white">
            Remember me
          </Label>
        </div>
        <Button
          type="submit"
          onSubmit={(e) => {
            e.preventDefault();
            console.log(formData);
            fetch('http://localhost:8090/users', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Signup;
