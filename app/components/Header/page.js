import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehance } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faDribbble } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function page() {
    return (
        <div className="absolute h-14 w-full bg-slate-950">
            <div className="flex justify-between py-2 px-96">
                <div>
                    <div>
                        <nav className="container mx-auto">
                            <ul className="flex justify-between content-center items-center gap-4 h-4">
                                
                                <li>
                                    <a className="text-white hover:text-gray-300 ml-4">
                                    <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>

                                <li>
                                    <a className="text-white hover:text-gray-300 ml-4">
                                    <FontAwesomeIcon icon={faFacebookF} size="2x" className="h-4"/>
                                    </a>
                                </li>

                                <li>
                                    <a className="text-white hover:text-gray-300 ml-4">
                                    <FontAwesomeIcon icon={faBehance} size="2xs"/>
                                    </a>
                                </li>

                                <li>
                                    <a className="text-white hover:text-gray-300 ml-4">
                                    <FontAwesomeIcon icon={faDribbble} size="2xs"/>
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <h3 className="text-white hover:text-gray-300 ml-4 mt-2">+440 012 3654 896</h3>
                    <h3 className="text-white hover:text-gray-300 ml-4 mt-2">support@colorlib.com</h3>
                </div>

            </div>
        </div>
    )
}
