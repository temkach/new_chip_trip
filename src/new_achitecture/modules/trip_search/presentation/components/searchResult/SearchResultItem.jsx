import React from 'react';
import { Box, Link, Typography, Button } from '@material-ui/core';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import TrainIcon from '@mui/icons-material/Train';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { resultItemStyle } from './style';
import RideSharing from '../../../../../general/assets/car-sharing.png';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SearchResultItem({
	item,
	from,
	to,
	data,
	time,
	price,
}) {
	const style = useMediaQuery('(max-width:650px)')
		? resultItemStyle.sm
		: resultItemStyle.lg;

	const defineTypeOfTransport = (transport) => {
		let resultLink;
		switch (transport) {
			case 4:
				resultLink = (
					<Link href='https://blablacar.com' target='_blank' rel='noreferrer'>
						<Button
							variant='outlined'
							style={style.buyTicket}
							type='submit'
						>
							Find a trip
						</Button>
					</Link>
				);
				break;
			case 5:
				resultLink = (
					<Link href='https://www.aferry.com/' target='_blank' rel='noreferrer'>
						<Button
							variant='outlined'
							style={style.buyTicket}
							type='submit'
						>
							Buy Ticket
						</Button>
					</Link>
				);
				break;
			default:
				resultLink = (
					<Link href='https://omio.sjv.io/XxEWmb' target='_blank' rel='noreferrer'>
						<Button
							variant='outlined'
							style={style.buyTicket}
							type='submit'
						>
							Buy Ticket
						</Button>
					</Link>
				);
		}
		return resultLink;
	};
	const defineIconOfTransport = (transport) => {
		let resultIcon;
		switch (transport) {
			case 4:
				resultIcon = (
					<Typography>
						<img
							src={RideSharing}
							alt='car-shearing'
							style={style.car}
						/>{' '}
						Ride share
					</Typography>
				);
				break;
			case 3:
				resultIcon = (
					<Typography>
						<TrainIcon style={style.icon} fontSize='small' /> Train
					</Typography>
				);
				break;
			case 2:
				resultIcon = (
					<Typography>
						<DirectionsBusIcon style={style.icon} fontSize='small' />{' '}
						Bus
					</Typography>
				);
				break;
			case 10:
				resultIcon = (
					<Typography>
						<DirectionsBoatIcon style={style.icon} fontSize='small' />{' '}
						Ferry
					</Typography>
				);
				break;
			default:
				resultIcon = (
					<Typography>
						<AirplanemodeActiveIcon
							style={style.icon}
							fontSize='small'
						/>{' '}
						Flight
					</Typography>
				);
		}
		return resultIcon;
	};
	return (
		<Box style={style.itemContainer}>
			<Box style={style.directions}>
				<Typography style={style.boldText}>
					{from} - {to}
				</Typography>
				{defineIconOfTransport(data.transportation_type)}
			</Box>
			<Box style={style.directions}>
				<Typography sx={{ color: 'rgb(119, 87, 80)' }}>{time}</Typography>
				<Box
					sx={
						useMediaQuery('(max-width:480px)')
							? {
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
							  }
							: {}
					}
				>
					{defineTypeOfTransport(data.transportation_type)}
					<Link
						href='https://www.booking.com/index.en-gb.html'
						target='_blank'
						rel='noreferrer'
					>
						<Button variant='outlined' style={style.buyTicket} type='submit'>
							Booking
						</Button>
					</Link>
					<Link
						href='https://www.hostelworldgroup.com'
						target='_blank'
						rel='noreferrer'
					>
						<Button variant='outlined' style={style.buyTicket} type='submit'>
							Hostel world
						</Button>
					</Link>
				</Box>
				<Typography style={style.price}>{price} </Typography>
			</Box>
		</Box>
	);
}
