import BMWI3Image from "../assets/bmw-i3.jpeg";
import BMWI8Image from "../assets/bmw-i8.jpeg";
import BMWI3Color1 from "../assets/bmw-i3-col01.jpeg";
import BMWI3Color2 from "../assets/bmw-i3-col02.jpeg";
import BMWI3Color3 from "../assets/bmw-i3-col03.jpeg";
import BMWI8Color1 from "../assets/bmw-i8-col01.jpeg";
import BMWI8Color2 from "../assets/bmw-i8-col02.jpeg";

export const models = [
	{
		id: 1,
		title: "BMW i3",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.",
		initialPrice: 42400,
		img: BMWI3Image,
		colors: [
			{
				id: "white",
				label: "White",
				img: BMWI3Color1,
				price: 0,
				hex: "#FFF",
			},
			{
				id: "mineral-grey",
				label: "Mineral Grey",
				img: BMWI3Color2,
				price: 550,
				hex: "#303539",
			},
			{
				id: "orange-metallic",
				label: "Orange metallic",
				img: BMWI3Color3,
				price: 550,
				hex: "#cf5a16",
			},
		],
		accessories: [
			{
				id: "i3-charging-station",
				label: "BMW Charging Station",
				price: 1080,
			},
			{
				id: "i3-premium-maintenance",
				label: "BMW Maintenance Program Upgrade",
				price: 1895,
			},
			{
				id: "i3-year-maintenance",
				label: "1 Year BMW Maintenance Program Upgrade",
				price: 975,
			},
		],
	},
	{
		id: 2,
		title: "BMW i8",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed laboriosam ratione nulla atque molestias at explicabo aperiam reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam magnam inventore nobis, rem adipisci eveniet illum.",
		initialPrice: 140700,
		img: BMWI8Image,
		colors: [
			{
				id: "grey-metallic",
				label: "Grey Metallic",
				img: BMWI8Color1,
				price: 0,
				hex: "#303539",
			},
			{
				id: "white-pearl-metallic",
				label: "White Pearl Metallic",
				img: BMWI8Color2,
				price: 1800,
				hex: "#d1d1d1",
			},
		],
		accessories: [
			{
				id: "i8-laserlight",
				label: "BMW laserlight",
				price: 6300,
			},
			{
				id: "i8-charging-station",
				label: "BMW Charging Station",
				price: 1080,
			},
			{
				id: "i8-premium-maintenance",
				label: "BMW Maintenance Program Upgrade",
				price: 1895,
			},
			{
				id: "i8-year-maintenance",
				label: "1 Year BMW Maintenance Program Upgrade",
				price: 975,
			},
		],
	},
];

export const steps = [
	{
		id: 1,
		title: "Models",
		subtitle: "Select Model",
	},
	{
		id: 2,
		title: "Colors",
		subtitle: "Select Color",
	},
	{
		id: 3,
		title: "Accessories",
		subtitle: "Select Accessories",
	},
	{
		id: 4,
		title: "Summary",
		subtitle: "Nice",
	},
];
