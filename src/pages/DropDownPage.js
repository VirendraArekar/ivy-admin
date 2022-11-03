import Skeleton from "../layouts/Skeleton";
import DropDown from "../components/DropDown";

import DropDownCheck from "../components/DropDownCheck";
import DatePicker from "../components/DatePicker";

export default function DropDownPage(props) {
  return (
    <Skeleton>
      <div className="container mx-auto py-4  md:w-5/5 w-12/12 px-4">
        <div className="w-full h-full rounded border-dashed border-2 border-gray-300 bg-white">
        <DatePicker></DatePicker>
          <DropDown
            options={[
              "John Doe",
              "Naveen Din",
              "John Doe",
              "Martin Gill",
              "Naveen Din",
            ]}
          />

          <DropDownCheck
            options={[
              "John Doe",
              "Naveen Din",
              "robert",
              "Martin Gill",
              "Naveen",
            ]}
          />
         
        </div>
      </div>
    </Skeleton>
  );
}
