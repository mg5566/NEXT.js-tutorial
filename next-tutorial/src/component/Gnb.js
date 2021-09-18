import { route } from "next/dist/server/router";
import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
	// const activeItem = "home";
	const router = useRouter();
	// console.log(router);
	let activeItem;

	if (router.pathname === "/") {
		activeItem = "home"
	} else if (router.pathname === "/about") {
		activeItem = "about";
	} else if (router.pathname == "/admin") {
		activeItem = "admin";
	}

	function goClick(e, data) {
		if (data.name === 'home') {
			router.push("/");
		} else if (data.name === 'about') {
			router.push("/about");
		}
	}
	return (
		<Menu inverted>
			<Menu.Item
				name='home'
				active={activeItem === 'home'}
			onClick={goClick}
			/>
			<Menu.Item
				name='about'
				active={activeItem === 'about'}
			onClick={() => {
				router.push("/contact");
			}}
			/>
			<Menu.Item
				name='admin'
				active={activeItem === 'admin'}
			onClick={() => {
				router.push("/admin");
			}}
			/>
		</Menu>
	);
}
