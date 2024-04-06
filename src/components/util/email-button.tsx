"use client";

const EmailButton = ({email}: {email: string}) => {
    const handleClickOnMail = () => {
        window.open(`mailto:${email}`);
    }

    return (
        <button
            onClick={handleClickOnMail}
            className="
                    font-bold
                    mt-[1rem]
                    block
                    relative
                    text-[1.5rem]
                    before:content-['']
                    before:py-[1rem]
                    before:absolute before:bottom-[-0.5rem] before:left-0
                    before:w-0
                    before:hover:w-full
                    before:border-b-2
                    before:border-black


                    before:transition-all
                    before:ease-in-out
                    before:duration-500
                "
        >{email}</button>
    )
}

export default EmailButton;