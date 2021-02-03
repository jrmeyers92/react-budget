import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	innerGrid: {
		padding: "2rem",
	},
}));

const Budget = () => {
	const classes = useStyles();
	return (
		<Grid xs={12} justify='center' container alignItems='center'>
			<Grid item xs={4} className={classes.innerGrid}>
				<Paper>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
					impedit mollitia ab a sed ducimus corrupti porro quo placeat, cumque
					delectus dicta nulla animi suscipit aliquam minima quia id itaque.
					Obcaecati soluta iste impedit alias? Reprehenderit a commodi
					repudiandae tempora adipisci iure, suscipit temporibus! Eveniet,
					omnis. Recusandae, placeat necessitatibus, ipsam fugiat neque minima
					architecto accusamus incidunt deleniti, quasi facere! Ab
					exercitationem pariatur voluptatibus! Molestiae alias corrupti
					repudiandae nulla quisquam perferendis! Expedita aliquam molestiae
					magni iste reiciendis odio porro praesentium explicabo voluptatibus
					quisquam aperiam, recusandae similique rerum illum provident dicta
					nesciunt aliquid quia odit, esse saepe? Cumque, doloribus sit? Amet
					nemo ullam culpa quasi dignissimos. Odit, mollitia sit magnam
					consequuntur sed assumenda, nemo amet facilis laboriosam excepturi
					perspiciatis ullam, eius voluptates obcaecati molestias ut quam
					doloremque quidem. Omnis nostrum dolorum facere dolor facilis,
					doloribus laboriosam molestias inventore temporibus cumque optio
					quidem velit reprehenderit repellendus, at maiores iste nisi,
					dignissimos illo provident saepe! Quasi eaque cupiditate asperiores
					sint veniam maiores animi? Provident exercitationem obcaecati
					doloribus fuga aut et nesciunt eius, nemo, minus, dolor quae ex
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Budget;
