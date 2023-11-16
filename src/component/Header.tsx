import { MenuHeader } from "./MenuHeader";
import { PageHeader } from "./PageHeader";


export function Header() {

    return (
        <div className="bg-bg-header min-h-screen w-full max-h-[1117px]">
            <MenuHeader />
            <PageHeader />
        </div>
    )

}