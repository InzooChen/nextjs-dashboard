'use client';

import { usePathname } from 'next/navigation';

export default function Page() {
    const pathname = usePathname();
    return (
        <div>
            <h1>{pathname}</h1>
            <p>Customers Page</p>
        </div>
    )
}