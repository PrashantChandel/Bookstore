import { MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon, UserCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Dropdown from './Components/Dropdown/Dropdown';
import { auth } from './firebase/utils';
function NavBar(props) {
    const { currentUser } = props;
    console.log(currentUser);
    return (
        <>
            <div className="relative flex h-16 items-center justify-between bg-gray-900 px-20">
                <div>
                    <ul className="text-white flex ">
                        <li className="px-3 flex">
                            <Link to='/' className="px-3 flex"><BookOpenIcon className='text-white-200 h-6' />
                                Bookstore
                            </Link>
                        </li>
                        <Dropdown />

                    </ul>
                </div>
                <div>
                    <div className=" text-white search-box bg-gray-600 px-3 py-1 flex justify-between rounded-lg">
                        <div className="pr-20">Search</div>
                        <div className="pl-20">
                            <MagnifyingGlassIcon className='text-white-200 h-6 py-1' />
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="text-white flex">
                        {!currentUser ?
                            <>
                                <li className='px-3'><Link to="/login">LOGIN</Link> </li>
                                <li><Link to="/register">Register</Link> </li>
                            </>
                            :
                            <li className="flex">
                                <UserCircleIcon className='text-white-200 h-6 px-3' />
                                <span onClick={() => auth.signOut()}>Logout</span>
                            </li>
                        }
                        <li className="px-3">
                            <HeartIcon className='text-white-200 h-6' />
                        </li>
                        <li className="px-3">
                            <ShoppingBagIcon className='text-white-200 h-6' />
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
};
NavBar.defaultProps = {
    currentUser: null
}
export default NavBar;