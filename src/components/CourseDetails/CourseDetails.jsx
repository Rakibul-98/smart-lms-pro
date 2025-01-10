import { BsJournalBookmark } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { PiSealQuestionFill } from "react-icons/pi";
import { Link, useLoaderData } from "react-router";

export default function CourseDetails() {

    const courseData = useLoaderData().data;

    const { title, description, outline } = courseData;

    return (
        <div className="pt-24 pb-10 bg-red-500 min-h-screen">
            <div className="w-10/12 md:w-8/12 lg:w-[650px] mx-auto bg-base-200 shadow-2xl p-4 rounded-md">
                <h1 className="text-2xl font-bold text-center text-gray-800  pb-2">{title} </h1>
                <p className="mb-2">{description}</p>
                <ul className="menu bg-white rounded-xl ">
                    {
                        outline.map((item, index) => (
                            <li className="" key={index}>
                                <details>
                                    <summary className="bg-base-200 my-1 font-semibold"><BsJournalBookmark />{item.title}</summary>
                                    <ul>
                                        {
                                            item.resources.map((resource, subIndex) => (
                                                <li key={subIndex}>
                                                    <a href={resource.link} target="_blank"> <MdOutlineKeyboardDoubleArrowRight />{resource.title}</a>
                                                </li>
                                            ))
                                        }
                                        <li>
                                            <Link to={`/quiz/${item._id}`} > <PiSealQuestionFill />{item.quiz.title}</Link>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        )
                        )}
                </ul>
            </div>
        </div>
    )
}
