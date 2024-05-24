import classNames from "classnames"

export const WrapperWidth = ({ className, children }: {className?: string, children: React.ReactNode}) => {

    return (
        <div className={classNames("mx-auto w-full max-w-screen-xl px-2.5 md:px-20", className)}>
            {children}
        </div>
    )
}