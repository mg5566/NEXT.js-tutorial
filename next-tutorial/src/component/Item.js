import image from "next/image";
import { Button } from "semantic-ui-react";
import styles from "./Item.module.css";

export default function Item({ item }) {
	const { image_link, name, price, description } = item;
	return (
		<>
			<div className={styles.wrap}>
				<div className={styles.image}>
					<img src={image_link} alt={name} />
				</div>
				<div>
					<strong>{name}</strong>
					<strong>${price}</strong>
				</div>
				<Button color="orange">구매 하시던가 말든가 누르고 싶은 누르던가 ㅡㅡ</Button>
				<div>
					<p>{description}</p>
				</div>
			</div>
		</>
	);
}
