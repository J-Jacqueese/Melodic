// Shared Components
import { Metadata } from "next";
import NavBar from "../../components/portfolio/NavBar";
// setting meta
export const metadata: Metadata = {
	title: "About",
};
export default function AboutLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="flex min-h-screen flex-col bg-[#fff] ">{children}</main>
	);
}
