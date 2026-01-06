import { Link } from "react-router";

export default function ButtonLink({
    className = "text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none",
    to = "/",
    btnText = "Text"
}) {
    return (
        <>
            <Link
                to={to}
                className={className}
            >
                {btnText}
            </Link>
        </>
    )
}