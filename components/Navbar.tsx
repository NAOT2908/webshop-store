import Link from "next/link";

import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "./navbar-action";


const Navbar = async () => {
    const categories = await getCategories();

    return (
        <div className=" border-b">
            <Container >
                <div className=" relative px-4 sm:px-6 lg:px-8 flex items-center h-16">
                    <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>
                    <MainNav data={categories} />
                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
}

export default Navbar;