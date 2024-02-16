'use client';

import { usePathname } from 'next/navigation';
import { unstable_noStore as noStore } from 'next/cache';


export default async function Page() {
    noStore();
    const pathname = usePathname();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return (
        <div>
            <h1>{pathname}</h1>
            <p>Customers Page</p>
        </div>
    )
}