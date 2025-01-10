import { useLoaderData } from "react-router";
import CategoryCard from "./CategoryCard";

export default function Courses() {

  const coursesData = useLoaderData().data;

  return (
    <div className="bg-yellow-400 py-20 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 my-6 underline ms-5">Available Courses:</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {coursesData.map((category, index) => (
            <div key={index}>
              <CategoryCard categoryData={category} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
