import { Icon } from "semantic-ui-react";

export default function Error404() {
	return (
		<div style={ {padding: "200px 0", textAlign: "center", fontSize: 30 } } >
			<Icon name="waring circle" color="red" />
			404: 페이지를 찾을 수가 없네요.
		</div>
	);
}
