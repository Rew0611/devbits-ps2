import "./dashboard.css"

const WatchlistCard = (props) => {
    return (
        <>
            <div class="watchlist-card-main flex justify-center h-15 w-30 mx-2 my-2">
                <div
                    class="watchlist-card block max-w-sm rounded-3xl p-1 shadow-lg ">
                    <h5 class="mb-1 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {props.title}
                    </h5>
                    <p class="mb-2 text-sm text-neutral-600 dark:text-neutral-200">
                        {props.desc}
                    </p>
                    {/* <button
                        type="button"
                        class="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Button
                    </button> */}
                </div>
            </div>
        </>
    )
}

export default WatchlistCard;