import { BsJournalBookmark } from "react-icons/bs";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { PiSealQuestionFill } from "react-icons/pi";
import { Link, useLoaderData } from "react-router";

export default function CourseDetails() {

    const courseData = useLoaderData().data;

    const { title, description, outline } = courseData;

    return (
        <div>
            <h1>Course Details for : {title} </h1>
            <p>{description}</p>
            <ul className="menu bg-base-200 ">
                {
                    outline.map((item, index) => (
                        <li className="" key={index}>
                            <details>
                                <summary className="bg-white my-1 font-semibold"><BsJournalBookmark />{item.title}</summary>
                                <ul>
                                    {
                                        item.resources.map((resource, subIndex) => (
                                            <li key={subIndex}>
                                                <a href={resource.link}> <MdOutlineKeyboardDoubleArrowRight />{resource.title}</a>
                                            </li>
                                        ))
                                    }
                                    <li>
                                        <Link > <PiSealQuestionFill />{item.quiz.title}</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    )
                    )}

            </ul>

        </div>
    )
}
