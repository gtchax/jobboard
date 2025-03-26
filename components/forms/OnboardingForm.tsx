"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CardContent, Card } from "../ui/card";
import UserTypeForm from "./UserTypeForm";
import CompanyForm from "./CompanyForm";
import JobSeekerForm from "./JobSeekerForm";

type UserSelectionType = "company" | "jobSeeker" | null;

const OnboardingForm = () => {
  const [step, setStep] = useState<number>(1);
  const [userType, setUserType] = useState<UserSelectionType>(null);

  function handleUserSelectionType(type: UserSelectionType) {
    setUserType(type);
    setStep(2);
  }

  function renderStep() {
    switch (step) {
      case 1:
        return <UserTypeForm onSelect={handleUserSelectionType} />;

      case 2:
        return userType === "company" ? <CompanyForm /> : <JobSeekerForm />;

      default:
        return null;
    }
  }
  return (
    <>
      <Link href="/" className="flex items-center self-center mb-10">
        <h1 className="font-bold text-2xl">
          Job<span className="text-primary">Board</span>
        </h1>
      </Link>
      <Card className="max-w-lg w-full">
        <CardContent>{renderStep()}</CardContent>
      </Card>
    </>
  );
};

export default OnboardingForm;
