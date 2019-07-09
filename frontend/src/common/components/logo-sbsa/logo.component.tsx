import * as React from "react";
import { SBSASvg } from "./svg.component";


export const LogoSBSAComponent = ({ classes }) => (
  <div className={classes.container}>
    <SBSASvg
      className={classes.svg}
    />
  </div>
);
