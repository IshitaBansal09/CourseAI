"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

function AddCourse() {
  const { user } = useUser();
  return (
    <div className="sm:flex items-center justify-between">
      <div>
        <h2 className="text-2xl">
          Hello, <span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-sm text-gray-500">
          Create new courses with AI, Share with friends and Earn from it.
        </p>
      </div>
      <div className="my-2">
        <Link href={"/create-course"}>
          <Button>Create AI Course</Button>
        </Link>
      </div>
    </div>
  );
}

export default AddCourse;