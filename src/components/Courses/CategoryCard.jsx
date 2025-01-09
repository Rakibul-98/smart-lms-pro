/* eslint-disable react/prop-types */

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";

export default function CategoryCard({ categoryData }) {

    const { category, courses } = categoryData;

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {category}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <ul className="menu bg-base-200 p-0 [&_li>*]:rounded-none">
                    {
                        courses.map((course, index) => (
                            <li key={index}>
                                <Link to={`/course/${course.id}`}>
                                    <MdOutlineKeyboardDoubleArrowRight />
                                    {course.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
