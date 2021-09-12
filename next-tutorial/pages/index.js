import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'
import Axios from 'axios';
import ItemList from '../src/component/ItemList';
import { Divider, Header } from "semantic-ui-react";
import Link from 'next/link'

export default function Home() {
	const [list, setList] = useState([]);

	const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

	function getData() {
		Axios.get(API_URL)
			.then(res => {
				console.log(res.data);
				setList(res.data);
			});
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<Head>
				<title>HOME | mg5566</title>
			</Head>
			<Header as="h3" style={{ paddingTop: 40 }}>
				베스트 상품
			</Header>
			<ItemList list={list.slice(0, 9)} />
			<Divider />
			<Header as="h3" style={{ paddingTop: 40 }}>
				신상품
			</Header>
			<ItemList list={list.slice(9)} />
		</div>
	)
}

// axios
