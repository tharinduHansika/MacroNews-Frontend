import Image from "next/image";
import TextField from '@mui/material/TextField';
import Header_1 from "../../components/Header_1/page";
import Header_2 from "../../components/Header_2/page";
import Card_1 from "../../components/News_Cars/Card_1/page";
import Card_2 from "../../components/News_Cars/Card_2/page";
import Card_3 from "../../components/News_Cars/Card_3/page";
import NewsLetter from "../../components/News_Letter/page";
import Footer from "../../components/Footer/page";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCalendarAlt, faComment } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white">
        <Header_1></Header_1>
        <div className="bg-red-500 w-full h-52"></div>
        <Header_2></Header_2>
      
        <div className="h-auto w-full gap-4 py-4 px-4 2xl:px-80 xl:px-64 lg:px-32">
            <div className="bg-red-500 h-96 flex flex-col items-center justify-center">
                <h3 className="text-6xl font-semibold">Image News</h3>
            </div>
        </div>

        <div className=" w-full mb-6 px-4 2xl:px-80 xl:px-64 lg:px-32">
            <h3 className="text-black bg-slate-200 p-2"><span className="text-red-600 ml-2">Breaking News:</span> Astronomy Binoculars A Great Alternative</h3>
        </div>


        <div className="flex flex-col w-full lg:flex-row h-auto gap-4 px-4 2xl:px-80 xl:px-64 lg:px-32">
            <div className="lg:basis-2/3 2xl:basis-2/3 bg-fuchsia-400 p-4">
                <div className="bg-slate-950 h-12 p-2 mb-4">
                    <h3 className="text-white m-1 ml-2 mb-2">Latest News</h3>
                </div>

                <div className="bg-slate-500 h-96 px-6"></div>

                <div className="p-4">
                    <div className="bg-red-500 py-2 px-3 w-28 mt-2 mb-2">
                    News Box
                    </div>

                    <h1 className="mb-4 mt-4 text-black text-2xl font-semibold">A Discount Toner Cartridge Is Better Than Ever.</h1>

                    <div className="flex flex-row mb-8">
                        <div className=" w-24 h-4 mr-4 flex flex-row">
                            <FontAwesomeIcon icon={faUser} className="mr-1 p-0 text-black"/>
                            <h6 className= "text-xs text-black">John Smith</h6>
                        </div>
                        <div className=" w-28 h-4 mr-4 flex flex-row">
                            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 p-0 text-black"/>
                            <h6 className= "text-xs text-black">03 April,2023</h6>
                        </div>
                        <div className=" w-28 h-4 mr-4 flex flex-row">
                            <FontAwesomeIcon icon={faComment} className="mr-1 p-0 text-black"/>
                            <h6 className= "text-xs text-black">08 Comments</h6>
                        </div>
                    </div>

                    <h3 className="text-black">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.

                    <br></br>
                    <br></br>
                    <br></br>

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.


                    </h3>
                </div>
            </div>

            <div className="lg:basis-1/3 bg-fuchsia-300 p-4">
                <div className="bg-slate-950 h-12 p-2 mb-4">
                    <h3 className="text-white m-1 ml-2 mb-2">Latest News</h3>
                </div>
                <div className="bg-white h-auto">
                    <Card_2></Card_2>

                    <div className="px-4">
                        <hr></hr>
                        <Card_3></Card_3>

                        <hr></hr>
                        <Card_3></Card_3>

                        <hr></hr>
                        <Card_3></Card_3>
                    </div>
                </div>

             {/* <NewsLetter></NewsLetter> */}

                <div className="bg-slate-950 h-12 p-2 mb-4">
                    <h3 className="text-white m-1 ml-2 mb-2">Latest News</h3>
                </div>
                <div className="bg-white h-auto">
                    <div className="px-4">
                        <hr></hr>
                        <Card_3></Card_3>

                        <hr></hr>
                        <Card_3></Card_3>

                        <hr></hr>
                        <Card_3></Card_3>
                    </div>
                </div>
            </div>
        </div>




        <Footer></Footer>
    
    </main>
  );
}
