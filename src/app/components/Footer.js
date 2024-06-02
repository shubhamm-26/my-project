"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className=" bg-secondary-200 text-textSecondary text-center">
            <div className="flex justify-around items-center p-8">
                <div className="flex flex-col justify-center space-y-3 items-center py-8">
                    <Image
                        src="/mail.png"
                        alt="logo"
                        width={42}
                        height={27}
                    />
                    <div className="flex flex-col text-center">
                        <p>MAIL US</p>
                        <Link href="mailto:info@vmcogulf.com">info@vmcogulf.com</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-3 items-center">
                    <Image
                        src="/whatsapp.png"
                        alt="logo"
                        width={36}
                        height={36}
                    />
                    <div className="flex flex-col text-center">
                        <p>WHATSAPP US</p>
                        <Link href="https://wa.me/966114944312">+966 11 494 4312</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-center space-y-3 items-center">
                    <Image
                        src="/call.png"
                        alt="logo"
                        width={32}
                        height={32}
                    />
                    <div className="flex flex-col text-center">
                        <p>CALL US</p>
                        <Link href="tel:+966114944312">+966 11 494 4312</Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center space-x-20 py-8 border-t border-textSecondary/50">
                <Link href="https://instagram.com">
                        <Image src="/instagram.png" alt="Instagram Icon" width={36} height={36} />
                </Link>
                <Link href="https://linkedin.com">
                        <Image src="/linkedin.png" alt="LinkedIn Icon" width={36} height={36} />
                </Link>
                <Link href="https://twitter.com">
                        <Image src="/twitter.png" alt="Twitter Icon" width={36} height={36} />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;