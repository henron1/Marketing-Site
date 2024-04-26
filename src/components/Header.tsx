"use client";

import { Fragment } from "react";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { NavLink } from "@/components/NavLink";
import mainLogo from "@/images/main-logo.svg";
function MobileNavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  );
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx("origin-center transition", open && "scale-90 opacity-0")}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx("origin-center transition", !open && "scale-90 opacity-0")}
      />
    </svg>
  );
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Features</MobileNavLink>
            <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
            <MobileNavLink href="#pricing">Pricing</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Sign in</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              {/* NEED TO PUT ACTUAL LOGO HERE EVENTUALLY */}
              <svg
                width="396"
                height="116.70219334741789"
                viewBox="0 0 370 109.03992812763794"
                className="h-20 w-auto"
              >
                <defs id="SvgjsDefs4597"></defs>
                <g
                  id="SvgjsG4598"
                  transform="matrix(1.3678206205368042,0,0,1.3678206205368042,-18.61467123079959,-13.992804415278908)"
                  fill="#52796f"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M80.11,49.695c0.003,5.951,1.481,10.771,3.303,10.771   c1.823,0,3.302-4.824,3.305-10.768c-0.003-5.951-1.479-10.773-3.303-10.773C81.591,38.926,80.107,43.748,80.11,49.695z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M39.138,14.154c-15.075,6.26-25.529,19.93-25.529,35.779   c-0.004,15.852,10.454,29.52,25.536,35.777C30.504,78.232,24.764,65,24.764,49.934S30.508,21.637,39.138,14.154z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M49.349,10.23c-7.066,0-12.803,17.854-12.803,39.857   c0,22.016,5.736,39.859,12.808,39.861c3.491-0.002,6.66-4.367,8.969-11.438c1.954,4.756,4.414,7.598,7.084,7.598   c7.367,0.002,11.532-16.066,11.527-35.883c0.005-19.816-5.156-35.887-11.521-35.879c-2.651,0-5.093,2.797-7.041,7.484   C56.057,14.668,52.871,10.234,49.349,10.23z M75.225,50.227c0.005,11.121-2.764,20.143-6.174,20.143   c-3.412,0-6.176-9.023-6.176-20.139c0-11.127,2.764-20.146,6.176-20.15C72.465,30.084,75.229,39.102,75.225,50.227z M57.792,23.318   c-2.395,6.576-3.907,16.191-3.907,26.908c-0.001,10.623,1.484,20.166,3.841,26.736c-1.15,1.559-2.418,2.424-3.748,2.424   c-5.202-0.004-9.414-13.117-9.414-29.299c0-16.174,4.212-29.293,9.407-29.293C55.333,20.797,56.626,21.701,57.792,23.318z"
                    ></path>
                  </g>
                </g>
                <g
                  id="SvgjsG4599"
                  transform="matrix(3.352121114730835,0,0,3.352121114730835,113.8773525101984,11.259687986142222)"
                  fill="#52796f"
                >
                  <path d="M10.723 5.888999999999999 l2.9297 0 l0 14.111 l-2.9297 0 l0 -5.8008 l-5.9668 0 l0 5.8008 l-2.9297 0 l0 -14.111 l2.9297 0 l0 5.7617 l5.9668 0 l0 -5.7617 z M24.755815625 20 l-3.6719 -6.2109 l-0.84961 0 l0 6.2109 l-2.9297 0 l0 -14.111 l5.1172 0 c3.1934 0 4.541 1.8848 4.541 4.2188 c0 1.8945 -1.0742 3.125 -2.9883 3.5352 l4.248 6.3574 l-3.4668 0 z M20.234415625 8.32 l0 3.3691 l1.7285 0 c1.5625 0 2.1973 -0.66406 2.1973 -1.6797 c0 -1.0059 -0.63477 -1.6895 -2.1973 -1.6895 l-1.7285 0 z M46.542921875000005 20 l-2.9199 0 l-0.92773 -10.635 l-3.5742 10.635 l-1.8945 0 l-3.5742 -10.635 l-0.9375 10.635 l-2.9297 0 l1.1816 -14.111 l4.1797 0 l3.0078 8.8574 l3.0469 -8.8574 l4.1797 0 z M59.248203125 5.888999999999999 l2.9199 0 l0 14.111 l-3.3887 0 l-6.25 -10.088 l0 10.088 l-2.9199 0 l0 -14.111 l3.3496 0 l6.2891 10.029 l0 -10.029 z M76.406140625 5.888999999999999 l-4.6387 7.3535 l0 6.7578 l-2.9395 0 l0 -6.6895 l-4.668 -7.4219 l3.2422 0 l2.8809 4.8047 l2.8906 -4.8047 l3.2324 0 z"></path>
                </g>
              </svg>
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#testimonials">Testimonials</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">Sign in</NavLink>
            </div>
            <Button href="/register" color="green">
              <span>
                Get started <span className="hidden lg:inline">today</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
