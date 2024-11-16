import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function TopicDescription() {
  return (
    <div className="sm:px-10 md:px-20 ">
      <div className="mt-5">
        <label>
          Write the topic for which you want to generate a course (e.g., Python
          Course, Yoga, etc):
        </label>
        <Input placeholder={"Topic"} />
      </div>
      <div className="mt-5">
        <label>Tell us more about your course.</label>
        <Textarea placeholder="About your course"/>
      </div>
    </div>
  );
}

export default TopicDescription;
