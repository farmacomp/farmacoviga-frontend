import React from 'react';

// material-ui
import { Typography } from '@material-ui/core';

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import LineChart from '../../ui-component/LineChart';
import ChoroplethMap from '../../ui-component/Choropleth';

//==============================|| SAMPLE PAGE ||==============================//

const Gtrends = () => {
    const data = [
        ['GO', 32],
        ['SP', 10],
        ['PE', 10],
        ['AC', 10],
        ['AM', 10],
        ['MA', 65],
        ['PA', 10],
        ['RO', 10],
        ['TO', 10],
        ['DF', 34],
        ['MS', 10],
        ['MG', 10],
        ['MT', 10],
        ['RS', 52],
        ['PR', 10],
        ['SC', 10],
        ['CE', 10],
        ['PI', 10],
        ['AL', 10],
        ['BA', 10],
        ['ES', 10],
        ['PB', 10],
        ['RJ', 10],
        ['RN', 10],
        ['SE', 10],
        ['RR', 10],
        ['AP', 10]
    ];
    // ["MB", 75], ["SK", 43], ["AB", 50], ["BC", 88], ["NU", 21], ["NT", 43],
    // ["YT", 21], ["ON", 19], ["QC", 60], ["NB", 4], ["NS", 44], ["NF", 38],
    // ["PE", 67]];

    return (
        <MainCard title="Gtrends">
            <Typography variant="body2">
                Lorem ipsum dolor sit amen, consenter nipissing eli, sed do elusion tempos incident ut laborers et doolie magna alissa. Ut
                enif ad minim venice, quin nostrum exercitation illampu laborings nisi ut liquid ex ea commons construal. Duos aube grue
                dolor in reprehended in voltage veil esse colum doolie eu fujian bulla parian. Exceptive sin ocean cuspidate non president,
                sunk in culpa qui officiate descent molls anim id est labours.
            </Typography>

            <div
                style={{
                    height: '100vh',
                    width: '100vw'
                }}
            >
                <ChoroplethMap data={data} />
            </div>

            <LineChart />
        </MainCard>
    );
};

export default Gtrends;
