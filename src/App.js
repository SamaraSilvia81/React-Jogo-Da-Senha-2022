import { useEffect, useState } from "react";
import { styled, alpha } from '@mui/material/styles';
import Info from "./components/Info";
import Wordle from "./components/Wordle";

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
	  backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
	  marginLeft: theme.spacing(1),
	  width: 'auto',
	},
  }));


const dataBase = [
	{"id": 1, "word": "ninja"},
	{"id": 2, "word": "spade"},
	{"id": 3, "word": "pools"},
	/*{"id": 4, "word": "drive"},
	{"id": 5, "word": "relax"},
	{"id": 6, "word": "times"},
	{"id": 7, "word": "train"},
	{"id": 8, "word": "cores"},
	{"id": 9, "word": "pours"},
	{"id": 10, "word": "blame"},
	{"id": 11, "word": "banks"},
	{"id": 12, "word": "phone"},
	{"id": 13, "word": "bling"},
	{"id": 14, "word": "coins"},
	{"id": 15, "word": "hello"}*/
];

export default function App() {
	const [solution, setSolution] = useState(null)

	useEffect(() => {
		const random = dataBase[Math.floor(Math.random() * dataBase.length)]
		setSolution(random.word)
	},[setSolution])

	

  return (
    <div className="App">

		<Info/>
		{solution && <Wordle solution={solution} />}

    </div>
  );
}

