
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faCalendarAlt, faComment } from '@fortawesome/free-solid-svg-icons';


export default function page() {
    return (
        <div>
              <div className="bg-slate-500 min-w-44 h-52 px-6 relative">
                <div className="bg-red-500 py-2 px-3 w-28 mb-2 absolute bottom-2">
                  News Box
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-black text-base">A Discount Toner Cartridge.</h3>

                <div className="flex flex-row mb-2">
                  {/* <div className=" w-24 h-4 mr-0 flex flex-row">
                    <FontAwesomeIcon icon={faUser} className="mr-1 p-1 text-black"/>
                    <h6 className= "text-xs text-black">John Smith</h6>
                  </div> */}
                  <div className=" w-30 h-4 mr-2 flex flex-row">
                    <FontAwesomeIcon icon={faCalendarAlt} className="mr-1 p-1 text-black"/>
                    <h6 className= "text-xs text-black">03 April,2023</h6>
                  </div>
                  {/* <div className=" w-30 h-4 mr-2 flex flex-row">
                    <FontAwesomeIcon icon={faComment} className="mr-1 p-1 text-black"/>
                    <h6 className= "text-xs text-black">08 Comments</h6>
                  </div> */}
                </div>

                <h3 className="text-black mb-2 text-sm">Lorem ipsum dolor sit amet, consecteturadip isicing elit, sed do eiusmod tempor incididunt ed do eius.</h3>

              </div>
            </div>
    )
}