import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Wordle from './Wordle';

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

const letsGame = ['Vamos Jogar'];

function Info() {

	const [value, setValue] = React.useState(letsGame[-1]);
	const [inputValue, setInputValue] = React.useState('');

  return  (

	<div>

		<div className='infoGame'>

			 <Box sx={{ flexGrow:1}}>
				<AppBar position="static" sx={{ height:80}} >
				<Toolbar className='NavBar'>
				<Typography

					variant="h6"
					noWrap
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block'}, top:80}}
					>
					JOGO DA SENHA
				</Typography>
				</Toolbar>
				</AppBar>
     		 </Box>

		</div>

		<div className='outRules'> 
			<div className='rulesGame'>
				<p>O jogo da senha é simples e prático. Você só precisa digitar alguma palavra e o jogo
					automaticamente retorna para você confirmando se a posição da letra está correta ou não.
				</p>

				Verde: A posição está correta
				Amarelo: A posição está incorreta
				Cinza: Aquela letra não existe
			</div>
		</div>

	</div>
  )
}

export default Info