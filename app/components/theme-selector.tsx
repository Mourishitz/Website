import { constants } from "@/app/constants";

export const ThemeSelector: React.FC = () => {    
    return (
        <div className="dropdown dropdown-hover">
            <div tabIndex={0} className="btn m-1">
                Theme
            </div>
            <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl">
                { 
                    constants.themes.map((theme) => {
                        return(
                            <li key={theme.value} >
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller w-full btn btn-sm btn-block btn-ghost justify-start text-base-content"
                                    aria-label={theme.name}
                                    value={theme.value} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}