import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../favicon.ico";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Login",
	description: "台风系统可视化登录页",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
