"use client";
import React, { useEffect, useState } from "react";
import FormField from "./FormField";
import { IMessage } from "@/pages/api/interfacesAndTypes";
import { useMutation, useQuery } from "@tanstack/react-query";
import { postMessage } from "@/pages/api/addMessage";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  } as IMessage);

  const clearData = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const [able, setAble] = useState(false);
  const [isMessageShown, setMessageShown] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (formData.name && formData.message && formData.email) {
      setAble(true);
    } else {
      setAble(false);
    }
  }, [formData.email, formData.message, formData.name]);

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (formData: IMessage) => postMessage(formData),
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.error(error);
    },
  });

  const successBackdropMessage = () => {
    setMessageShown(true);
    setTimeout(() => {
      setMessageShown(false);
    }, 3000);
  };

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          mutate(formData);
          if (isSuccess) {
            clearData();
            successBackdropMessage();
          }
        }}
        className="mt-12 flex flex-col gap-10 relative min-[768px]:w-[332px] min-[768px]:m-0 min-[1440px]:w-[526px] "
      >
        <>
          {isMessageShown ? (
            <div className="fixed w-full h-full bg-[rgba(0,0,0,0.5)] text-white flex justify-center items-center top-0 left-0">
              <p className="opacity-100">Message sent!</p>
            </div>
          ) : (
            <></>
          )}
        </>

        <FormField
          label="Name"
          onChangeText={handleChange}
          value={formData.name}
          disabled={isPending}
        />
        <FormField
          label="Email"
          type="email"
          onChangeText={handleChange}
          value={formData.email}
          disabled={isPending}
        />
        <FormField
          label="Message"
          isTextArea
          onChangeText={handleChange}
          value={formData.message}
          disabled={isPending}
        />
        <button
          className="w-full h-[75px] flex justify-center items-center bg-[var(--primary)] disabled:opacity-50 "
          disabled={!able || isPending}
        >
          {isPending ? "Sending..." : "Let’s get started"}
        </button>
      </form>
    </>
  );
};

export default Form;
