import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-primary">
            <div className="container mx-auto text-white px-6 py-10 text-sm flex justify-between flex-col md:flex-row">
                <ul className="flex gap-3">
                    <li><Link href="/conditions">Conditions of use</Link></li>
                    <li><Link href="/privacy">Privacy notice</Link></li>
                </ul>
                <span>© 2022, StoreDotCom. All rights reserved.</span>
            </div>
        </div>
    )
}