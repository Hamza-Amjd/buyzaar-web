"use client";

import useCart from "@/lib/hooks/useCart";

import { UserButton, useUser } from "@clerk/nextjs";
import { CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <nav className="sticky top-0 py-2 px-10 flex gap-3 justify-between items-center bg-white max-sm:px-2 z-50">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo1.png"
          alt="logo"
          width={40}
          height={40}
          className="w-9 h-9 sm:w-10 sm:h-10 sm:mr-2"
        />
        <Image
          src="/logo.png"
          alt="logo"
          width={130}
          height={30}
          className="w-24 h-6 sm:w-32 sm:h-6 hidden sm:flex"
        />
      </Link>

      <div className="flex gap-4 text-base-bold max-lg:hidden">
        <Link
          href="/"
          className={`hover:text-red-1 ${pathname === "/" && "text-red-1"}`}
        >
          Home
        </Link>
        <Link
          href={user ? "/wishlist" : "/sign-in"}
          className={`hover:text-red-1 ${
            pathname === "/wishlist" && "text-red-1"
          }`}
        >
          Wishlist
        </Link>
        <Link
          href={user ? "/orders" : "/sign-in"}
          className={`hover:text-red-1 ${
            pathname === "/orders" && "text-red-1"
          }`}
        >
          Orders
        </Link>
      </div>

      <div className="flex gap-3 border border-grey-2 px-3 py-1 items-center rounded-lg">
        <input
          className="outline-none max-sm:max-w-[200px]"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query === ""}
          onClick={() => router.push(`/search/${query}`)}
        >
          <Search className="cursor-pointer h-4 w-4 hover:text-red-1" />
        </button>
      </div>

      <div className="relative flex gap-3 items-center">
        <Link
          href="/cart"
          className="flex items-center gap-3 border rounded-lg px-2 py-1 hover:bg-black hover:text-white max-md:hidden"
        >
          <ShoppingCart />
          <p className="text-base-bold">Cart ({cart.cartItems.length})</p>
        </Link>

        <button
          onClick={() => setDropdownMenu(!dropdownMenu)}
          className="flex scale-125 lg:hidden cursor-pointer items-center justify-center flex-col"
        >
          <span
            className={`h-0.5 rounded-sm  transition-all duration-300 ease-out w-5 bg-black ${
              dropdownMenu ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
          ></span>
          <span
            className={`h-0.5 rounded-sm  transition-all duration-300 ease-out w-5 bg-black my-0.5 ${
              dropdownMenu ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`h-0.5 rounded-sm  transition-all duration-300 ease-out w-5 bg-black ${
              dropdownMenu ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>
        {dropdownMenu && (
          <div className="absolute top-12 right-5 flex flex-col gap-4 p-4 pr-6 rounded-lg border bg-white text-base-bold lg:hidden z-20">
            <Link href="/" className="hover:text-red-1">
              Home
            </Link>
            <Link
              href={user ? "/wishlist" : "/sign-in"}
              className="hover:text-red-1"
            >
              Wishlist
            </Link>
            <Link
              href={user ? "/orders" : "/sign-in"}
              className="hover:text-red-1"
            >
              Orders
            </Link>
            <Link
              href="/cart"
              className="flex items-center gap-3 border max-sm:border-none rounded-lg px-2 py-1 hover:bg-black relative hover:text-white"
            >
              <ShoppingCart />
              <div className="bg-black w-5 h-5 rounded-full flex items-center justify-center absolute top-0 right-3">
                <p className="text-small-bold text-white">
                  {cart.cartItems.length}
                </p>
              </div>
            </Link>
          </div>
        )}

        {user ? (
          <UserButton afterSignOutUrl="/sign-in" />
        ) : (
          <Link href="/sign-in">
            <CircleUserRound />
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
