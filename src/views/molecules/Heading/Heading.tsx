function Heading(props:any) {
    const { title } = props;

    return (
        <header className="py-8 px-8">

            <div className="mt-2 md:flex md:items-center md:justify-between">
                <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:tracking-tight sm:truncate">
                    {title}
                </h2>
                </div>
                <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
               
                <button
                    type="button"
                    className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                >
                    New User
                </button>
                </div>
            </div>

        </header>
    )
}

export default Heading;