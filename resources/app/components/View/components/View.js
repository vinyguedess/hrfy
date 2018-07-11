import React from "react";
import PropTypes from "prop-types";
import { Grid, Avatar, Card, CardHeader, CardContent, FormControl, TextField } from "@material-ui/core";
import ViewTags from "./ViewTags";
import ViewFormation from "./ViewFormation";
import ViewJobExperience from "./ViewJobExperience";


const View = ({ human, fetchHumanById, match }) => 
{
    fetchHumanById(match.params.id);
    return (
        <div>
            <Grid item xs={12}>
                <Card>
                    <CardHeader title={human ? human.name : human}
                        avatar={<Avatar>{human ? <img src={human.picture} /> : "Profile"}</Avatar>}
                        subheader={human ? human.birthDate.split("T")[0] : null} />

                    <CardContent>
                        <FormControl disabled>
                            <TextField label="Phone" value={human ? human.phone : human} />
                        </FormControl>

                        <FormControl disabled>
                            <TextField label="E-mail" value={human ? human.email : human} />
                        </FormControl>
                    </CardContent>
                </Card>
            </Grid>

            <ViewTags tags={human ? human.tags : null} />

            <div>
                <h2>Formations</h2>
                {
                    human ?
                        human.formations.map((formation, key) =>
                            <ViewFormation formation={formation} key={`view-profile-formations-${key}`} />)
                        :
                        null
                }
            </div>

            <div>
                <h2>Experiences</h2>
                {
                    human ?
                        human.professionalExperiences.map((experience, key) =>
                            <ViewJobExperience experience={experience} key={`view-profile-experiences-${key}`} />)
                        :
                        null
                }
            </div>
        </div>
    );
};


View.propTypes = {
    human: PropTypes.any,

    fetchHumanById: PropTypes.func.isRequired,

    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};


export default View;