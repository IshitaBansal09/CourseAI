"use client";
import { Button } from "@/components/ui/button";
import { ClipboardEditIcon, Grid2X2, Lightbulb } from "lucide-react";
import React, { useState } from "react";
import SelectCategory from "./_component/SelectCategory";
import TopicDescription from "./_component/TopicDescription";
import SelectOption from "./_component/SelectOption";

function CreateCourse() {
  const StepperOptions = [
    {
      id: 1,
      name: "Category",
      icon: <Grid2X2 />,
    },
    {
      id: 1,
      name: "Topic & Desc",
      icon: <Lightbulb />,
    },
    {
      id: 1,
      name: "Options",
      icon: <ClipboardEditIcon />,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = 2;
  return (
    <div>
      {/* Stepper */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl text-primary font-medium">Create Course</h2>
        <div className="flex">
          {StepperOptions.map((item, index) => (
            <div key={index} className="flex items-center mt-10">
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`bg-gray-200 p-3 rounded-full text-white
                  ${activeIndex >= index && "bg-[#875bf9]"}`}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm">{item.name}</h2>
              </div>
              {index != StepperOptions?.length - 1 && (
                <div
                  className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-gray-300 ${
                    activeIndex >= index + 1 && "bg-[#875bf9]"
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 md:px-20 lg:px-44 mt-10">
        {activeIndex == 0 ? <SelectCategory /> :
        activeIndex==1? <TopicDescription/>:
        activeIndex==2? <SelectOption/>: null}

        <div className="flex justify-between mt-10">
          <Button
            disabled={activeIndex == 0}
            onClick={() => setActiveIndex(activeIndex - 1)}
          >
            Previous
          </Button>
          {activeIndex < 2 && (
            <Button
              disabled={activeIndex == 2}
              onClick={() => setActiveIndex(activeIndex + 1)}
            >
              Next
            </Button>
          )}
          {activeIndex == 2 && <Button>Generate</Button>}
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
