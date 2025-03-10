import Github from "@/app/api/Github"
import Env from "@/env"
import { GitHubRepository } from "@/app/types/github/GitHubReposResponse";

export const ProjectsTimeline: React.FC = () => {
    const api = new Github({ user: 'Mourishitz', token: Env.GITHUB_TOKEN });
    const repos = api.getRepositories().then((repositories) => {
        return repositories;
    });
    
    return (
        <>
        <li>
            <div className="timeline-middle">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd" />
            </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">1984</time>
                <div className="text-lg font-black">First Project lol</div>
                Projects alalala
            </div>
            {
                <>
                {api.getRepositories().then((repos) => {
                    repos.map((repo: GitHubRepository) => {
                        return (
                            <div className="timeline-start mb-10 md:text-end">
                                <time className="font-mono italic">1111</time>
                                <div className="text-lg font-black">First Project lol</div>
                                Projects alalala
                            </div>
                        )
                    });
                })}
                </>
                
            }
            <hr />
        </li>
        </>
    )

}