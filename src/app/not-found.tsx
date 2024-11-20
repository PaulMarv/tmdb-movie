

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 text-center p-4">
            <div className="max-w-lg bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-4xl font-bold text-red-500">404</h1>
                <p className="mt-2 text-xl text-gray-600">Oops! The page you are looking for does notexist.</p>
                <Link href="/">
                    <span className="mt-4 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Go back to Home
                    </span>
                </Link>
            </div>
        </div>
    );
}
