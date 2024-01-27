"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormSchema } from "@/src/lib/types";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string>("");

  const onSubmit: SubmitHandler<z.infer<typeof FormSchema>> = async (
    formData,
  ) => {};

  const {
    formState: { isLoading },
  } = useForm<z.infer<typeof FormSchema>>({
    mode: "onChange",
    resolver: zodResolver(FormSchema),
    defaultValues: { email: "", password: "" },
  });

  return <div>LoginPage</div>;
};

export default LoginPage;
