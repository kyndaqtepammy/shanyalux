import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import bus from '../assets/img/bus.jpg';
import BookingWidget from './BookingWidget';

const Styles = styled.div`
    .jumbo {
        background: url(${bus}) no-repeat fixed bottom;
        background-size: cover;
        color: #ccc;
        height: 50vh;
        width: 100%;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;
export const Jumbotron =  () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay">
                <Container>
                    <h1>Welcome</h1>
                    <p>Tagline goes here for some control</p>
                    <BookingWidget/>
                </Container>
            </div>
        </Jumbo>
    </Styles>
)

