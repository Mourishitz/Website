import Wakatime from "@/app/api/Wakatime";

export const Stats: React.FC = async ({}) => {
    const wakatimeApi = new Wakatime({ user: 'Mourishitz'});
    const stats = await wakatimeApi.getStats('Mourishitz');
    const totalHours = (stats.data.total_seconds_including_other_language) / 3600 as Number;
    const topOperatingSystem = stats.data.operating_systems[0];

    const statComponent = (
        <>
            <div className="stat">
                <div className="stat-title">Total time coding</div>
                <div className="stat-value text-primary">{totalHours.toFixed()} Hours</div>
                <div className="stat-desc">Daily average: {stats.data.human_readable_daily_average_including_other_language}</div>
            </div>

            <div className="stat">
                <div className="stat-title">My most used editor is:</div>
                <div className="stat-value">{stats.data.editors[0].name}</div>
                <div className="stat-desc">
                    Time used: {stats.data.editors[0].text}
                </div>
                <div className="stat-desc text-secondary">
                    Top 3: {stats.data.editors.map((editor) => {
                        return editor.name;
                    }
                    ).slice(0, 3).join(', ')}
                </div>
            </div>

            <div className="stat">
                <div className="stat-title">Total Programming Languages</div>
                <div className="stat-value text-secondary">{stats.data.languages.length}</div>
                <div className="stat-desc">Top 3: 
                    {stats.data.languages.map((lang) => {
                        return lang.name;
                    }).slice(0, 3).join(', ')}
                </div>
                <div className="stat-desc text-base-content">
                    Time using {stats.data.languages[0].name}: {stats.data.languages[0].text}
                </div>
            </div>

            <div className="stat">
                <div className="stat-title">Programing {stats.data.human_readable_range}</div>
                <div className="stat-value text-primary">{stats.data.days_including_holidays} Days!</div>
                <div className="stat-desc text-lg mt-[-12px]">worth of code.</div>
            </div>

            <div className="stat">
                <div className="stat-value">{topOperatingSystem.name}</div>
                <div className="stat-title">is my main Operating System</div>
                <div className="stat-desc text-secondary">Time used: {topOperatingSystem.text}</div>
            </div>
        </>
            
    );

    return (
        <>
            <div className="flex justify-center">
                <div className="hidden lg:block">
                    <div className="stats shadow bg-base-300">
                        {statComponent}
                    </div>
                </div>
                
                <div className="lg:hidden">
                    <div className="stats-vertical shadow bg-base-300">
                        {statComponent}
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center text-content text-xs">
                    Powered by&nbsp;
                    <a href="https://wakatime.com/" className="link">Wakatime</a>
                </p>
            </div>
        </>
    );
}