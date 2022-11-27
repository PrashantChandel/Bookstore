import { MagnifyingGlassIcon, HeartIcon, ShoppingBagIcon, UserCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
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
                        <li className="px-3 catDropDown">
                            <p className="linkx ">Categories</p>
                            <div className="content ">
                                <a className='w-60' href="/">Editor's Pick</a>
                                <a href="/">Adventure</a>
                                <a href="/">Contemporary Lit</a>
                                <a href="/">Diverse Lit</a>
                                <a href="/">Fanfiction</a>
                                <a href="/">Fantasy</a>
                                <a href="/">Historical Fiction</a>
                                <a href="/">Horror</a>
                                <a href="/">Humor</a>
                                <a href="/">Mystery</a>
                                <a href="/">New Adult</a>
                                <a href="/">Non-Fiction</a>
                                <a href="/">Paranormal</a>
                                <a href="/">Poetry</a>
                                <a href="/">Romance</a>
                                <a href="/">Science Ficiton</a>
                                <a href="/">Short Story</a>
                                <a href="/">Teen Fiction</a>
                                <a href="/">Thriller</a>
                                <a href="/">Werewolf</a>
                                <div>
                                </div>
                            </div>
                        </li>
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