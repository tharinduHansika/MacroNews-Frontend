
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCalendarAlt, faComment } from '@fortawesome/free-solid-svg-icons';


export default function page() {
    return (
        <div id="small card"  className="flex flex-col lg:flex-row  mb-4">
              <div className="lg:basis-1/2 xl:basis-1/3 bg-slate-700 h-52 px-6">
                <div className="bg-red-500 py-2 px-3 w-28 mt-28 mb-2">
                  News Box
                </div>
              </div>
              <div className="lg:basis-1/2 xl:basis-2/3  bg-slate-300 h-52 pl-6">
                <h1 className="mb-4 mt-4 text-black text-xl">A Discount Toner Cartridge Is Better Than Ever.</h1>

                <div className="flex flex-row mb-2">
                  {/* <div className=" w-24 h-4 mr-0 flex flex-row">
                    <FontAwesomeIcon icon={faUser} className="mr-1 p-1 text-black"/>
                    <h6 className= "text-xs text-black">John Smith</h6>
                  </div> */}
                  <div className=" w-28 h-4 mr-0 flex flex-row">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 p-1 text-black"/>
                    <h6 className= "text-xs text-black">03 April,2023</h6>
                  </div>
                  <div className=" w-28 h-4 mr-0 flex flex-row">
                    <FontAwesomeIcon icon={faComment} className="mr-1 p-1 text-black"/>
                    <h6 className= "text-xs text-black">08 Comments</h6>
                  </div>
                </div>

                <div>
                  <h1 className="text-black text-sm">
                    Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt.
                  </h1>
                </div>
              </div>              
            </div>
    )
}