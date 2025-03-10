export const Hero: React.FC = () => {
    return (
        <div className="hero min-h-screen text-base-content">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="/developer.png"
                    className="max-w-sm p-4 w-full transform transition-transform duration-300 hover:scale-120" />
                <div>
                    <p className="animate-pulse">👋 Hi there! I am Gabriel Morishita</p>
                    <h1 className="text-5xl font-bold">Software Developer {`</>`} </h1>
                    <br />
                    <p className="m-y6">
                        I am a Computer Science student and tech entusiast.
                        I am passionate about learning new technologies and building software that can make a difference in people's lives.
                    </p>
                    <br />
                    <button className="btn btn-primary">
                        See my work
                        <svg
                            width="12px"
                            height="12px"
                            className="inline-block h-2 w-2 fill-current opacity-60"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}