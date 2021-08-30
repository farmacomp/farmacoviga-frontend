import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import qs from 'querystring';
import axios from 'axios';
// import { Grid } from '@material-ui/core';

// material-ui

// project imports
import MainCard from '../../ui-component/cards/MainCard';
import DataTable from '../../ui-component/Table';
import Form from '../../ui-component/Form';
import WordCloudComponent from '../../ui-component/WordCloud';

//==============================|| SAMPLE PAGE ||==============================//

const Tweets = () => {
    const [rows, setRows] = useState([]);
    const [textArray, setTextArray] = useState([]);
    const location = useLocation();

    const queryParams = qs.parse(location.search.replace('?', ''));

    const columns = [
        {
            field: 'user',
            headerName: 'Usuário',
            width: 150
        },
        {
            field: 'date',
            headerName: 'Data',
            width: 150
        },
        {
            field: 'likes',
            headerName: 'Likes',
            width: 150
        },
        {
            field: 'retweets',
            headerName: 'RTS',
            width: 150
        },
        {
            field: 'content',
            headerName: 'Conteúdo',
            width: 500,
            renderCell: (params) => (
                <a href={`https://twitter.com/${params.getValue(params.id, 'user')}/status/${params.getValue(params.id, 'id')}`}>
                    {params.getValue(params.id, 'text')}
                </a>
            )
        }
    ];
    useEffect(() => {
        setTextArray(rows.map((row) => row.text));
    }, [rows]);

    useEffect(() => {
        if (queryParams.terms && queryParams.quantity && queryParams.location && queryParams.language) {
            const body = {
                terms: queryParams.terms,
                quantity: queryParams.quantity,
                location: queryParams.location,
                language: queryParams.language,
                store: false
            };

            try {
                axios.post('https://farmacovigia-api.herokuapp.com/tweets', body).then((response) =>
                    setRows(
                        response.data.map((obj) => {
                            return {
                                id: obj.id_str,
                                user: obj.user.screen_name,
                                date: obj.created_at,
                                likes: obj.favorite_count,
                                retweets: obj.retweet_count,
                                text: obj.text
                            };
                        })
                    )
                );
            } catch (error) {
                console.log('An error occurred when fetching twitter data');
            }
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <MainCard title="Tweets">
            <Form />

            <br />

            {rows.length ? (
                <>
                    <DataTable rows={rows} columns={columns} />

                    <h1 style={{ marginTop: 64 }}>Wordcloud</h1>
                    <WordCloudComponent textArray={textArray} />
                </>
            ) : (
                <></>
            )}
        </MainCard>
    );
};

export default Tweets;
