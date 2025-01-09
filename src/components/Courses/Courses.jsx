import { useLoaderData } from "react-router";
import CategoryCard from "./CategoryCard";

export default function Courses() {

  const coursesData = useLoaderData().data;

  return (
    <div>Courses
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-y-10 justify-items-center">
        {coursesData.map((category, index) => (
          <div key={index}>
            <CategoryCard categoryData={category} />
          </div>
        ))}
      </div>
    </div>
  )
}
