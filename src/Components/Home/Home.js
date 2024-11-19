// @flow 
import * as React from 'react';
import { Banner } from './Banner';
import { Details } from './Details';
import { Carosel } from './Carosel';
import Footer from '../Shared/Footer';
// import Description  from './Descriptionr';



export const Home = () => {
    return (
        <div>
            <Carosel></Carosel>
            <Banner></Banner>
            <Details></Details>
            <Footer></Footer>
        </div>
    );
};