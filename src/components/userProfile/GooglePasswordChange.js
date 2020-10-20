import React from 'react';
import { Card, CardContent, Typography } from "@material-ui/core";
import VpnKeyIcon from "@material-ui/icons/VpnKey";


import FormHeader from "./../forms/FormHeader";

export default function GooglePasswordChange() {
    return (
        <Card>
          <CardContent>
            <FormHeader txt="Zmień hasło" icon={<VpnKeyIcon />} />
            <Typography>
              Jesteś zalogowany poprzez konto google, jeżeli chcesz zmienić
              hasło, zmien je w swoim koncie google.
            </Typography>
          </CardContent>
        </Card>
    )
}