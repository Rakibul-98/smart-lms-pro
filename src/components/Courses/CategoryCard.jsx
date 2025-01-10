/* eslint-disable react/prop-types */

import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router";
import ml from '../../assets/ml.jpeg';
import web from '../../assets/web.jpeg';
import programming from '../../assets/programming.png';

export default function CategoryCard({ categoryData }) {

    const { category, courses } = categoryData;

    const bannerImg = {
        "Machine Learning": ml,
        "Web Development": web,
        "Programming": programming,
    }

    return (
        <div className="card bg-base-100 w-[80%] sm:w-[70%] md:w-[320px] xl:w-[420px] mx-auto shadow-xl">
            <figure className="w-full h-60">
                <img className="rounded-t-2xl"
                    src={bannerImg[category] || "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"}
                    alt={category} />
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
