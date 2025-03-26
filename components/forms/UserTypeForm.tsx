import React from "react";
import { Button } from "../ui/button";
import { FaRegBuilding } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

type UserSelectionType = "company" | "jobSeeker";

interface UserTypeSelectionProps {
  onSelect: (type: UserSelectionType) => void;
}

const UserTypeForm = ({ onSelect }: UserTypeSelectionProps) => {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Welcome! Lets get started.</h2>
        <p className="text-muted-foreground">
          Choose how you would like to use our platform
        </p>
      </div>
      <div className="grid gap-4">
        <Button
          onClick={() => onSelect("company")}
          variant="outline"
          className="w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5"
        >
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <FaRegBuilding className="text-primary size-6" />
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-lg">Company / Organization</h3>
            <p>Post jobs and find exceptional talent.</p>
          </div>
        </Button>
        <Button
          onClick={() => onSelect("jobSeeker")}
          variant="outline"
          className="w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5"
        >
          <div className=" -ml-12 size-12 rounded-full bg-primary/10 flex items-center justify-center">
            <IoPerson className="text-primary size-6" />
          </div>
          <div className="text-left ">
            <h3 className="font-semibold text-lg">Job Seeker</h3>
            <p>Find your dream opportunity.</p>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default UserTypeForm;
