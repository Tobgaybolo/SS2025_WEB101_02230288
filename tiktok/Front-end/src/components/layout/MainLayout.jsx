'use client';
import Link from 'next/link';
import {
    FaHome, FaUserFriends, FaCompass, FaVideo,
    FaInbox, FaRegUser, FaPlus
} from 'react-icons/fa';

export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <div className="w-60 border-r fixed h-full overflow-y-auto">
                <div className="p-4">
                    <Link href="/" className="text-xl font-bold flex items-center">
                        <span className="text-red-500 mr-1">TikTok</span>
                    </Link>
                </div>

                <nav className="mt-4">
                    <ul className="space-y-2">
                        <li>
                            <Link 
                              href="/" 
                              className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2"
                            >
                                <FaHome className="text-xl mr-3" />
                                <span>For You</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                              href="/following" 
                              className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2"
                            >
                                <FaUserFriends className="text-xl mr-3" />
                                <span>Following</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                              href="/explore" 
                              className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2"
                            >
                                <FaCompass className="text-xl mr-3" />
                                <span>Explore</span>
                            </Link>
                        </li>
                        <li>
                            <Link 
                              href="/live" 
                              className="flex items-center p-3 hover:bg-gray-100 rounded-md mx-2"
                            >
                                <FaVideo className="text-xl mr-3" />
                                <span>LIVE</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="border-t mt-4 pt-4 px-2">
                    <p className="text-gray-500 text-sm px-3 mb-2">Suggested accounts</p>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div key={index} className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                            <div className="h-8 w-8 rounded-full bg-gray-300 mr-2"></div>
                            <div>
                                <p className="text-sm font-semibold">user_{index + 1}</p>
                                <p className="text-xs text-gray-500">user {index + 1}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div>
                        <p className="text-sm font-semibold">user_{index + 1}</p>
                        <p className="text-xs text-gray-500">user {index + 1}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
