import React, { useEffect, useRef } from 'react';
import { GoogleCharts } from 'google-charts';

/**
 * A Google Chart rendered in div
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
export default function Chart(props) {

    //Run google charts when lib has loaded
    useEffect(() => {

        GoogleCharts.load(() => {

            let data    = GoogleCharts.api.visualization.arrayToDataTable(props.data);
            let options = {
                title:  'This is your score',
                width:  600,
                height: 200,
                bar:    {groupWidth: '95%'},
                legend: {position: 'none'},
            };

            let chart = new GoogleCharts.api.visualization.ColumnChart(DOMObject.current);

            chart.draw(data, options);

        });

    }, [props.data]);


    const DOMObject = useRef();

    return (
        <div ref={DOMObject} className="chart"/>
    );

}
