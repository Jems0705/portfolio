import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
    CalendarIcon,
    EyeIcon,
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    MapPinIcon,
    PhoneIcon,
    UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Me from "@/assets/images/me.jpg";

export default function Home() {
    return (
        <main className="min-h-screen">
            <header className="p-4 border-b sticky top-0 bg-white/80 backdrop-blur-md">
                <div className="container mx-auto flex justify-between items-center">
                    <span className="text-xl font-semibold">{`<DevJames />`}</span>
                    <nav className="hidden md:block">
                        <ul className="flex gap-x-5 items-center">
                            <li>
                                <Link
                                    href="#about"
                                    className="no-underline text-sm font-medium transition-colors hover:text-blue-600"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#projects"
                                    className="no-underline text-sm font-medium transition-colors hover:text-blue-600"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#experience"
                                    className="no-underline text-sm font-medium transition-colors hover:text-blue-600"
                                >
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#skills"
                                    className="no-underline text-sm font-medium transition-colors hover:text-blue-600"
                                >
                                    Skills
                                </Link>
                            </li>

                            <li>
                                <Button asChild>
                                    <Link href="contact">Hire Me</Link>
                                </Button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="#" className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-3 gap-10">
                        <div className="col-span-3 space-y-8 lg:col-span-2">
                            <div className="space-y-4">
                                <h1 className="text-5xl font-bold mb-6 leading-tight">
                                    Web{" "}
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        Developer
                                    </span>
                                </h1>
                                <div className="space-y-1.5">
                                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Laborum ipsum magnam
                                        eius! Iure rem nostrum maiores labore,
                                        alias veniam dolor, explicabo ex iusto
                                        sint impedit delectus repellendus
                                        perferendis fugiat. Inventore!
                                    </p>
                                    <div className="flex flex-wrap mb-8 gap-2">
                                        <Badge
                                            variant="outline"
                                            className="text-blue-400 border-blue-400"
                                        >
                                            Frontend Developer
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="text-blue-400 border-blue-400"
                                        >
                                            Backend Developer
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space-x-3">
                                <Button
                                    className="items-center gap-x-3"
                                    size="lg"
                                >
                                    <MailIcon /> Get In Touch
                                </Button>
                                <Button
                                    variant="outline"
                                    className="items-center gap-x-3"
                                    size="lg"
                                >
                                    <EyeIcon /> View Resume
                                </Button>
                            </div>

                            <div className="space-x-3 [&_button]:rounded-full">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    title="Github"
                                >
                                    <GithubIcon />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    title="LinkedIn"
                                >
                                    <LinkedinIcon />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    title="Mail"
                                >
                                    <MailIcon />
                                </Button>
                            </div>
                        </div>
                        <div className="relative col-span-3 flex flex-col items-center lg:col-span-1 w-full max-w-md mx-auto">
                            <Image
                                src={Me}
                                alt="me"
                                width={400}
                                height={500}
                                className="rounded-2xl shadow-2xl object-cover"
                                // fill
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="#about" className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="space-y-16">
                        <div className="space-y-4 text-center">
                            <h2 className="text-4xl font-bold">About</h2>
                            <p className="text-xl text-slate-600">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Vero ab exercitationem
                                temporibus modi accusamus ipsam odio nam sed
                                rem, hic iste ipsa ipsum, laudantium aperiam
                                neque! Rerum nobis quo delectus.
                            </p>
                        </div>
                        <div className="space-y-6 [&_p]:leading-relaxed [&_p]:text-lg [&_p]:text-slate-600">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Omnis quod perspiciatis,
                                magnam sapiente fuga, culpa eius officia dolores
                                aut, reprehenderit laboriosam impedit veritatis
                                assumenda delectus obcaecati repudiandae
                                perferendis amet quos?
                            </p>

                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Molestias sit commodi dolorum
                                voluptas ratione praesentium fugiat neque
                                deleniti dicta sapiente! Tempora quibusdam
                                magnam repellendus perspiciatis quisquam vel
                                perferendis voluptates quod!
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 [&_svg]:text-blue-600 [&_svg]:w-5 [&_svg]:h-5 [&_span]:text-slate-600">
                                <div className="flex item-center space-x-2 text-sm">
                                    <MapPinIcon />
                                    <span>Marikina City</span>
                                </div>
                                <div className="flex item-center space-x-2 text-sm">
                                    <PhoneIcon />
                                    <span>+639665049681</span>
                                </div>
                                <div className="flex item-center space-x-2 text-sm">
                                    <MailIcon />
                                    <span>jamessantos996@gmail.com</span>
                                </div>
                                <div className="flex item-center space-x-2 text-sm">
                                    <UsersIcon />
                                    <span>Team Player</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="#skills" className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="space-y-16">
                        <div className="space-y-4 text-center">
                            <h2 className="text-4xl font-bold">
                                Skills & Technologies
                            </h2>
                            <p className="text-xl text-slate-600">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Vero ab exercitationem
                                temporibus modi accusamus ipsam odio nam sed
                                rem, hic iste ipsa ipsum, laudantium aperiam
                                neque! Rerum nobis quo delectus.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 [&_span]:text-lg">
                            <Badge variant="outline">HTML</Badge>
                            <Badge variant="outline">CSS</Badge>
                            <Badge variant="outline">JavaScript</Badge>
                            <Badge variant="outline">TypeScript</Badge>
                            <Badge variant="outline">Bootstrap</Badge>
                            <Badge variant="outline">Tailwind CSS</Badge>
                            <Badge variant="outline">
                                Motion (Framer motion)
                            </Badge>
                            <Badge variant="outline">React.js</Badge>
                            <Badge variant="outline">Next.js</Badge>
                            <Badge variant="outline">Node.js</Badge>
                            <Badge variant="outline">Express.js</Badge>
                            <Badge variant="outline">MySQL</Badge>
                            <Badge variant="outline">PostgreSQL</Badge>
                            <Badge variant="outline">MongoDB</Badge>
                            <Badge variant="outline">Drizzle ORM</Badge>
                            <Badge variant="outline">Supabase</Badge>
                            <Badge variant="outline">Git</Badge>
                            <Badge variant="outline">Visual Studio Code</Badge>
                            <Badge variant="outline">Jira</Badge>
                            <Badge variant="outline">Figma</Badge>
                            <Badge variant="outline">Vercel</Badge>
                        </div>
                    </div>
                </div>
            </section>

            <section id="#projects" className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="space-y-16">
                        <div className="space-y-4 text-center">
                            <h2 className="text-4xl font-bold">Projects</h2>
                            <p className="text-xl text-slate-600">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Vero ab exercitationem
                                temporibus modi accusamus ipsam odio nam sed
                                rem, hic iste ipsa ipsum, laudantium aperiam
                                neque! Rerum nobis quo delectus.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div className="bg-card text-card-foreground rounded-lg shadow-lg">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src=""
                                        alt=""
                                        width={300}
                                        height={200}
                                        className="w-full object-cover"
                                    />
                                </div>
                                <div className="space-y-1.5 p-6">
                                    <h3 className="text-xl font-semibold">
                                        Project A
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-700">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Deserunt modi fugiat
                                        assumenda! Officia, deleniti qui optio
                                        aliquam vero excepturi tenetur beatae
                                        tempora aliquid maiores fuga, dolores
                                        porro sequi consequuntur natus!
                                    </p>
                                </div>
                                <div className="p-6 pt-0 flex flex-wrap space-x-2">
                                    <Badge>Next.js</Badge>
                                    <Badge>Axios</Badge>
                                    <Badge>Tanstack Query + Table</Badge>
                                </div>
                            </div>
                            <div className="bg-card text-card-foreground rounded-lg shadow-lg">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src=""
                                        alt=""
                                        width={300}
                                        height={200}
                                        className="w-full object-cover"
                                    />
                                </div>
                                <div className="space-y-1.5 p-6">
                                    <h3 className="text-xl font-semibold">
                                        Project A
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-700">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Deserunt modi fugiat
                                        assumenda! Officia, deleniti qui optio
                                        aliquam vero excepturi tenetur beatae
                                        tempora aliquid maiores fuga, dolores
                                        porro sequi consequuntur natus!
                                    </p>
                                </div>
                                <div className="p-6 pt-0 flex flex-wrap space-x-2">
                                    <Badge>Next.js</Badge>
                                    <Badge>Axios</Badge>
                                    <Badge>Tanstack Query + Table</Badge>
                                </div>
                            </div>
                            <div className="bg-card text-card-foreground rounded-lg shadow-lg">
                                <div className="relative overflow-hidden rounded-t-lg">
                                    <Image
                                        src=""
                                        alt=""
                                        width={300}
                                        height={200}
                                        className="w-full object-cover"
                                    />
                                </div>
                                <div className="space-y-1.5 p-6">
                                    <h3 className="text-xl font-semibold">
                                        Project A
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-700">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Deserunt modi fugiat
                                        assumenda! Officia, deleniti qui optio
                                        aliquam vero excepturi tenetur beatae
                                        tempora aliquid maiores fuga, dolores
                                        porro sequi consequuntur natus!
                                    </p>
                                </div>
                                <div className="p-6 pt-0 flex flex-wrap space-x-2">
                                    <Badge>Next.js</Badge>
                                    <Badge>Axios</Badge>
                                    <Badge>Tanstack Query + Table</Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="#experience" className="py-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="space-y-16">
                        <div className="space-y-4 text-center">
                            <h2 className="text-4xl font-bold">
                                Professional Experience
                            </h2>
                            <p className="text-xl text-slate-600">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Vero ab exercitationem
                                temporibus modi accusamus ipsam odio nam sed
                                rem, hic iste ipsa ipsum, laudantium aperiam
                                neque! Rerum nobis quo delectus.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="p-6 bg-card text-card-foreground rounded-lg shadow-sm space-y-4">
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-semibold">
                                        Web Development Associate
                                    </h3>
                                    <p className="text-blue-600 font-medium">
                                        Company A
                                    </p>
                                    <span className="mt-1 text-sm text-gray-500">
                                        Feb 2023 - Current
                                    </span>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Deserunt modi fugiat
                                    assumenda! Officia, deleniti qui optio
                                    aliquam vero excepturi tenetur beatae
                                    tempora aliquid maiores fuga, dolores porro
                                    sequi consequuntur natus!
                                </p>

                                <ul className="space-y-2">
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="text-sm text-gray-700">
                                            lorem ipsumn dolor sit amet
                                            adipstsj.
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="text-sm text-gray-700">
                                            lorem ipsumn dolor sit amet
                                            adipstsj.
                                        </span>
                                    </li>
                                    <li className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="text-sm text-gray-700">
                                            lorem ipsumn dolor sit amet
                                            adipstsj.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="font-bold text-3xl mb-8">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        I&apos;m always interested in discussing new
                        opportunities and challenging projects.
                    </p>

                    <div className="flex space-x-5 justify-center">
                        <Button>
                            <MailIcon /> Send Message
                        </Button>
                        <Button variant="outline">
                            <CalendarIcon /> Schedule Call
                        </Button>
                    </div>
                </div>
            </section>

            <footer className="py-8 bg-primary">
                <div className="container max-w-6xl mx-auto px-4">
                    <span className="text-xl font-semibold text-primary-foreground">{`<DevJames />`}</span>
                </div>
                <Separator className="my-8 bg-border/35" />
                <div className="container max-w-6xl mx-auto px-4">
                    <p className="text-center text-primary-foreground/80">
                        © 2025 James Santos. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
