import React from 'react';
import {Link} from "@material-ui/core"; 
import { Alert,AlertTitle } from "@material-ui/lab";
import { Link as RouterLink } from "react-router-dom";

import routing from "./../../data/routing";

export default function NotificationForm({newOfferId,edit,editOfferId}) {
    return (
        <Alert severity="success">
        {edit ? <AlertTitle>Pomyślnie zaktualizowano ogłoszenie</AlertTitle> : <AlertTitle>Pomyślnie dodano ogłoszenie</AlertTitle>}    
        <span>Jeżeli chcesz zobaczyć ogłoszenie kliknij w </span>
        {edit ?
           <Link variant="body2" component={RouterLink} to={routing.offer.dynamicPath(editOfferId)}>
             link
            </Link>
            :   
            <Link variant="body2" component={RouterLink} to={routing.offer.dynamicPath(newOfferId)}>
                 link
            </Link>
        }        
      </Alert>
    )
}

