import { Button } from "components/button";
import { Field } from "components/field";
import { Input } from "components/input";
import { Label } from "components/label";
import Heading from "components/layout/Heading";
import { Textarea } from "components/textarea";
import React from "react";
import { useForm } from "react-hook-form";

const ContactBody = () => {
  const { control } = useForm({
    mode: "onChange",
  });
  return (
    <>
      <div className="container">
        <Heading>Contact Us</Heading>
        <div className="pt-10"></div>
        <div className="w-1/2 mx-auto">
          <form className="form" autoComplete="off">
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email address"
                control={control}
              ></Input>
            </Field>
            <Field>
              <Label htmlFor="message">Message</Label>
              <Textarea name="message" control={control}></Textarea>
            </Field>
            <Button type="submit" className="w-full max-w-[300px] mx-auto">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactBody;
