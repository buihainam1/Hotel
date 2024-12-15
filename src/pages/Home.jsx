import React ,{ useEffect, useState } from "react";
import Header from "../components/Header";
import { NavbarWithMegaMenu } from "./Navigation";
import { GalleryWithOverlayCard } from "./Gallery";
import List_Room from "./List_Room";
import ListTour from "./List_Tour";
import Video from "./video";
import Comment from "./Comment";
import Questions from "./Questions";
import Footer from "./Footer";


const Home = () => {
  
    return (
        <div className="w-full m-auto h-full">
            <Header /> 
            <NavbarWithMegaMenu />
            <GalleryWithOverlayCard />
            <List_Room />
            <ListTour />
            <Video />
            <Comment />
            <Questions />
            <Footer /> 
        </div>
    )
}

export default Home;