import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import BookingWidget from './BookingWidget';
import '../assets/css/styleMod.css';

const Styles = styled.div`
    .jumbo {
        background-size: cover;
        color: #ccc;
        height: 50vh;
        width: 100%;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: rgba(22, 0, 30, 0.6);
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;
export const Jumbotron =  (props) => (
    <Styles>
        <Jumbo fluid className="jumbo"  style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <div className="overlay">
                <Container style={{padding: '3%'}}>
                    <h1 className="headline">{props.headline}</h1>
                    <p className="headlineTag">{props.tagline}</p>
                    <BookingWidget/>
                </Container>
            </div>
        </Jumbo>
    </Styles>
)

