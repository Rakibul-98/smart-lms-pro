import { useLoaderData } from "react-router";
import CategoryCard from "./CategoryCard";

export default function Courses() {

  const coursesData = useLoaderData().data;

  return (
    <div className="w-11/12 xl:w-[1350px] mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 my-6 underline ms-5">Available Courses:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-items-center">
        {coursesData.map((category, index) => (
          <div key={index}>
            <CategoryCard categoryData={category} />
          </div>
        ))}
      </div>
    </div>
  )
}
