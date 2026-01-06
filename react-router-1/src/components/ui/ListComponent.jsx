import { NavLink } from "react-router";

export default function ListComponent({
    className = "flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0",
    liName = "Home",
    to = "/",
    cbfn = ({ isActive }) => {
        return `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
    }
}) {
    return (
        <>
            <ul className={className}>
                <li>
                    <NavLink
                        to={to}
                        className={cbfn}
                    >
                        {liName}
                    </NavLink>
                </li>
            </ul>
        </>
    )
}