"use client";

const topbutton = () => {
    return (
        <button
            onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="
                size-10 text-sm border rounded-full
                grid place-items-center cursor-pointer
                shadow-lg bg-white
                dark:bg-white dark:text-black
            "
        >
            <i className="fas fa-arrow-up"> </i>
        </button>
    );
};

export default topbutton;
