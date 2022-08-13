import {NavbarMinimalColored} from "../common/"

export default function DefaultLayout({ children }) {
    return (
			<>
        <NavbarMinimalColored />
				<main>{children}</main>
			</>
    )
}