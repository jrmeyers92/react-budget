import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withRouter } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: "#333",
	},
	title: {
		fontFamily: "Courgette, cursive",
		flexGrow: 1,
		[theme.breakpoints.down("sm")]: {
			flexGrow: 1,
		},
	},
	iconButton: {
		color: "white",
	},
	name: {
		fontSize: 16,
		marginLeft: 4,
	},
}));

const Nav = ({ userName }) => {
	const classes = useStyles();
	return (
		<div>
			<AppBar className={classes.appBar}>
				<Toolbar>
					<Typography className={classes.title} variant='h5' component='h1'>
						Bugetry
					</Typography>
					<IconButton className={classes.iconButton}>
						<AccountCircleIcon fontSize='large' />
						<span className={classes.name}>{userName}</span>
					</IconButton>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default withRouter(Nav);

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 		margin: 0,
// 		padding: 0,
// 	},
// 	appBar: {
// 		margin: 0,
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 	},
// 	title: {
// 		fontFamily: "Courgette, cursive",
// 		flexGrow: 1,
// 		[theme.breakpoints.down("sm")]: {
// 			flexGrow: 1,
// 		},
// 	},
// 	headerOptions: {
// 		marginLeft: "2rem",
// 		marginRight: "4rem",
// 		display: "flex",
// 		width: "100%",
// 		flexGrow: 1,
// 		justifyContent: "space-evenly",
// 	},
// 	button: {
// 		color: "white",
// 	},
// }));

// const Nav = (props) => {
// 	const { history } = props;
// 	const classes = useStyles();
// 	const [anchorEl, setAnchorEl] = React.useState(null);
// 	const open = Boolean(anchorEl);
// 	const theme = useTheme();
// 	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

// 	const handleMenu = (event) => {
// 		setAnchorEl(event.currentTarget);
// 	};

// 	const handleMenuClick = (pageURL) => {
// 		history.push(pageURL);
// 		setAnchorEl(null);
// 	};

// 	const handleButtonClick = (pageURL) => {
// 		history.push(pageURL);
// 	};

// 	// const menuItems = [
// 	// 	{
// 	// 		menuTitle: "Create Budget",
// 	// 		pageURL: "/createbudget",
// 	// 	},
// 	// 	{
// 	// 		menuTitle: "Add Expense",
// 	// 		pageURL: "/addexpense",
// 	// 	},
// 	// 	{
// 	// 		menuTitle: "Add Income",
// 	// 		pageURL: "/addincome",
// 	// 	},
// 	// ];

// 	return (
// 		<div className={classes.root}>
// 			<AppBar position='static' className={classes.appBar}>
// 				<Toolbar>
// 					<Typography variant='h6' className={classes.title}>
// 						Budgetry
// 					</Typography>
// 					<div>
// 						{isMobile ? (
// 							<>
// 								<IconButton
// 									edge='start'
// 									className={classes.menuButton}
// 									color='inherit'
// 									aria-label='menu'
// 									onClick={handleMenu}>
// 									<MenuIcon />
// 								</IconButton>
// 								<Menu
// 									id='menu-appbar'
// 									anchorEl={anchorEl}
// 									anchorOrigin={{
// 										vertical: "top",
// 										horizontal: "right",
// 									}}
// 									keepMounted
// 									transformOrigin={{
// 										vertical: "top",
// 										horizontal: "right",
// 									}}
// 									open={open}
// 									onClose={() => setAnchorEl(null)}>
// 									{menuItems.map((menuItem) => {
// 										return (
// 											<MenuItem
// 												onClick={() => handleMenuClick(menuItem.pageURL)}>
// 												{menuItem.menuTitle}
// 											</MenuItem>
// 										);
// 									})}
// 								</Menu>
// 							</>
// 						) : (
// 							<div className={classes.headerOptions}>
// 								{menuItems.map((menuItem) => {
// 									return (
// 										<Button
// 											className={classes.button}
// 											onClick={() => handleButtonClick(menuItem.pageURL)}>
// 											{menuItem.menuTitle}
// 										</Button>
// 									);
// 								})}
// 							</div>
// 						)}
// 					</div>
// 				</Toolbar>
// 			</AppBar>
// 		</div>
// 	);
// };

// export default withRouter(Nav);
