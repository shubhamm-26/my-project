"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-secondary-200 text-textSecondary text-center">
            <div className="flex justify-around items-start px-12 py-12 space-x-8">
                <div className="flex flex-col text-left space-y-3">
                    <h3 className="text-lg font-semibold mb-3">Categories</h3>
                    <ul className="space-y-5">
                        <li><Link href="">Beverage Ingredients</Link></li>
                        <li><Link href="">Vending Machines</Link></li>
                        <li><Link href="">Coffee Machines</Link></li>
                        <li><Link href="">Gelato</Link></li>
                        <li><Link href="">Sandwiches, Bakery & Pastry</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col text-left space-y-3">
                    <h3 className="text-lg font-semibold mb-4">Company</h3>
                    <ul className="space-y-5">
                        <li><Link href="">About Us</Link></li>
                        <li><Link href="">Our Offices</Link></li>
                        <li><Link href="">Blogs</Link></li>
                        <li><Link href="">Sneak Peak</Link></li>
                    </ul>
                </div>
                <div className="flex flex-col text-left space-y-3">
                    <h3 className="text-lg font-semibold mb-4">Other Brands</h3>
                    <ul className="space-y-5">
                        <li><Link href="https://dar.com.sa/" className="flex items-center">
                        <Image src="/dar.svg" className="mr-4" width={24} height={24} />Dar
                        </Link></li>
                        <li><Link href="https://thegreenmast.com/en" className="flex items-center">
                        <Image src="/mast.svg" className="mr-4" width={24} height={24} />The Green Mast
                        </Link></li>
                        <li><Link href="https://thegreenmast.com/en" className="flex items-center">
                        <Image src="/amore.svg" className="mr-4" width={24} height={24} />Amore
                        </Link></li>
                    </ul>
                </div>
                <div className="w-1/3 h-full flex flex-col items-end text-right space-y-6">
                    <Image src="/vmco.svg" alt="VMCO Gulf Logo"height={150} width={150}/>
                    <p className="mt-4">VMCOGULF is the ultimate F&B industry partner, providing a comprehensive suite of products and services that cater to every aspect of the sector.</p>
                    <div className="mt-4 flex flex-col items-end text-white">
                        <p className="flex items-center"><Image src="/mail.svg" alt="Mail Icon" width={20} height={20} className="mr-2"/> <Link href="mailto:info@vmcogulf.com">info@vmcogulf.com</Link></p>
                        <p className="flex items-center mt-2"><Image src="/call.svg" alt="Call Icon" width={20} height={20} className="mr-2"/> <Link href="tel:920007042">920007042</Link></p>
                    </div>
                </div>
            </div>
            <div className="relative py-12 border-t border-textSecondary/50">
            <div className="flex justify-center items-center space-x-5 py-2 ">
                <Link href="https://instagram.com">
                    <div className="bg-textSecondary/10 rounded-full p-3">
                        <Image src="/instagram.svg" alt="In" width={20} height={20}/>
                    </div>
                </Link>
                <Link href="https://linkedin.com">
                    <div className="bg-textSecondary/10 rounded-full p-3">
                        <Image src="/linkedin.svg" alt="Ld" width={20} height={20} />
                    </div>
                </Link>
                <Link href="https://twitter.com">
                    <div className="bg-textSecondary/10 rounded-full p-3">
                        <Image src="/twitter.svg" alt="Tw" width={20} height={20} />
                    </div>
                </Link>
            </div>
            <div className="py-4">
                <p>© 2020 - Powered by the Vending Machine Company. All rights are reserved</p>
            </div>
            <div className="absolute right-5 bottom-5">
            <Link href="https://wa.me/966114944312" >
                <div className="">
                    <Image src="/whatsapp.png" alt="WhatsApp Icon" width={50} height={50} />
                </div>
            </Link>
            </div>
            </div>
        </footer>
    );
}

export default Footer;
