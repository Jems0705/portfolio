import { Tag } from "@/components/tag";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
    CalendarIcon,
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    UsersIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen">
            <header className="py-4 border-b sticky top-0 bg-primary-foreground/90">
                <div className="container mx-auto flex justify-between items-center">
                    <span className="text-xl font-semibold">{`<DevJames />`}</span>
                    <nav>
                        <ul className="flex gap-x-5 items-center">
                            <li>
                                <Link
                                    href="/about"
                                    className="hover:text-blue-400 hover:underline transition-all"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/experience"
                                    className="hover:text-blue-400 hover:underline transition-all"
                                >
                                    Experience
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="projects"
                                    className="hover:text-blue-400 hover:underline transition-all"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="skills"
                                    className="hover:text-blue-400 hover:underline transition-all"
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

            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-3 gap-10">
                        <div className="col-span-3">
                            <h1 className="text-4xl font-bold mb-6">
                                Web Developer
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Laborum ipsum magnam eius!
                                Iure rem nostrum maiores labore, alias veniam
                                dolor, explicabo ex iusto sint impedit delectus
                                repellendus perferendis fugiat. Inventore!
                            </p>
                            <div className="flex space-x-3 space-y-3 flex-wrap mb-8">
                                <Tag
                                    Icon={UsersIcon}
                                    className="text-blue-400 border-blue-400"
                                >
                                    Front-end Developer
                                </Tag>
                            </div>

                            <div className="flex space-x-3">
                                <Button>View Resume</Button>
                                <Button variant="outline">Schedule Call</Button>
                            </div>
                        </div>
                        <Card className="p-5 col-span-3 flex flex-col items-center">
                            <div className="w-32 h-32 rounded-full bg-blue-400"></div>

                            <div className="text-center space-y-2">
                                <h3 className="font-semibold">James Santos</h3>
                                <p className="text-sm text-gray-600">
                                    Web Developer
                                </p>
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
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="font-bold text-3xl mb-8">
                        Professional Experience
                    </h2>

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
                                assumenda! Officia, deleniti qui optio aliquam
                                vero excepturi tenetur beatae tempora aliquid
                                maiores fuga, dolores porro sequi consequuntur
                                natus!
                            </p>

                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-sm text-gray-700">
                                        lorem ipsumn dolor sit amet adipstsj.
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-sm text-gray-700">
                                        lorem ipsumn dolor sit amet adipstsj.
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                    <span className="text-sm text-gray-700">
                                        lorem ipsumn dolor sit amet adipstsj.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto">
                    <h2 className="font-bold text-3xl mb-8">Projects</h2>

                    <div className="space-y-8">
                        <div className="p-6 bg-card text-card-foreground rounded-lg shadow-sm space-y-4">
                            <h3 className="text-xl font-semibold">Ydra</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Deserunt modi fugiat
                                assumenda! Officia, deleniti qui optio aliquam
                                vero excepturi tenetur beatae tempora aliquid
                                maiores fuga, dolores porro sequi consequuntur
                                natus!
                            </p>

                            <div className="flex flex-wrap space-x-3">
                                <Badge variant="secondary">React.js</Badge>
                                <Badge variant="secondary">Typescript</Badge>
                            </div>

                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm text-gray-700">
                                        lorem ipsumn dolor sit amet adipstsj.
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm text-gray-700">
                                        lorem ipsumn dolor sit amet adipstsj.
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm text-gray-700">
                                        lorem ipsumn dolor sit amet adipstsj.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <h2 className="font-bold text-3xl mb-8">Technical Skill</h2>

                    <div className="space-y-3 space-x-3">
                        <div className="p-6 bg-card text-card-foreground rounded-lg shadow-sm space-y-4">
                            <h3 className="text-lg font-semibold">Frontend</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        HTML
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        CSS
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        JavaScript
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        TypeScript
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Tailwind CSS
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Framer Motion
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        React.js
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Next.js
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 bg-card text-card-foreground rounded-lg shadow-sm space-y-4">
                            <h3 className="text-lg font-semibold">Backend</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Node.js
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Express.js
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        MySQL
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        PostgreSQL
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        MongoDB
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Drizzle ORM
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Supabase
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Neon
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        GraphQL
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 bg-card text-card-foreground rounded-lg shadow-sm space-y-4">
                            <h3 className="text-lg font-semibold">Tools</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Git
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        VS Code
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Jira
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Figma
                                    </span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                                    <span className="text-sm font-medium text-gray-700">
                                        Vercel
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="font-bold text-3xl mb-8">
                        Let's Work Together
                    </h2>
                    <p className="text-xl text-gray-600 mb-12">
                        I'm always interested in discussing new opportunities
                        and challenging projects.
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
        </main>
    );
}
