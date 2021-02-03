import React from "react";
import { ButtonGroup, Button } from "@material-ui/core";

const ToggleButton = () => {
	return (
		<div>
			<ButtonGroup color='primary' aria-label='outlined primary button group'>
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
		</div>
	);
};

export default ToggleButton;
