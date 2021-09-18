import Axios from "axios";
import router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

export default function Admin() {
	const router = useRouter();
	const [isLogin, setIsLogin] = useState(false);

	function checkLogin() {
		Axios.get("api/isLogin").then((res) => {
			if (res.status === 200 && res.data.name) {
				// login
				setIsLogin(true);
			} else {
				// no login
				router.push("/login");
			}
		})
	}

	function logout() {
		Axios.get("api/logout").then((res) => {
			router.push("/");
		})
	}
	useEffect(() => {
		checkLogin();
	}, []);
	return (
		<>
		admin
		{isLogin && <Button onClick={logout}>Logout</Button>}
		</>
	);
}
