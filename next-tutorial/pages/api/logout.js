import { useEffect } from "react"

export default (req, res) => {
	res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=3600;HttpOnly,Secure");
	res.statusCode = 200;
	res.json({ message: "OK" });
}
