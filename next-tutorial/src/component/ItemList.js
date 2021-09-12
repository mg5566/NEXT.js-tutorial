import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import sytles from "./ItemList.module.css"
import Link from 'next/link'

export default function ItemList({ list }) {
	return (
		<div>
			<Grid columns={3}>
				<Grid.Row>
					{list.map((item) => (
						<Grid.Column key={item.id}>
							<Link href={`/view/${item.id}`}>

							<a>
							<div className={sytles.wrap}>
								<Image
									src={item.image_link}
									alt={item.name}
									className={sytles.img_item}
									/>
								<strong className={sytles.tit_item}>{item.name}</strong>
								<span className={sytles.txt_info}>
									{item.category} {item.product_type}
								</span>
								<strong className={sytles.num_price}>${item.price}</strong>
							</div>
							</a>
							</Link>
						</Grid.Column>
					))}
				</Grid.Row>
			</Grid>
		</div>
	);
}
