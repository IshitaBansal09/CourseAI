import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

function SelectOption() {
  return (
    <div className="px-10 md:px-20 lg:px-44">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <label>Difficulty</label>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advance">Advance</SelectItem>
          </SelectContent>
        </Select>
        </div>

        <div>
          <label>Course Duration</label>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1 hour">1 hour</SelectItem>
            <SelectItem value="2 hours">2 hours</SelectItem>
            <SelectItem value="More than 3 hours">More than 3 hours</SelectItem>
          </SelectContent>
        </Select>
        </div>

        <div>
          <label>Add Video</label>
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
        </div>

        <div>
          <label className="text-sm">Add Video</label>
          <Input type="number"/>
        </div>

       
      </div>
    </div>
  );
}

export default SelectOption;
