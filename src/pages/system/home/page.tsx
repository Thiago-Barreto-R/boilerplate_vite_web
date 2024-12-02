import { Button } from "@/components/ui/button";
import LayoutMain from "../layout";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { toast } from "sonner";
import { FaRegCopy } from "react-icons/fa6";

export default function Home() {
  const user = localStorage.getItem("client");
  const gitCloneLink =
    "git clone git@github.com:Thiago-Barreto-R/boilerplate_vite_web.git";
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(gitCloneLink);
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <LayoutMain>
      <header className="absolute left-0 top-0 flex w-full items-center justify-around border-b p-4">
        <Link to={"/"}>Logo</Link>
        <ul className="flex items-center gap-10">
          <li>
            <a
              href=""
              className="rounded-md p-2 transition-all duration-300 hover:bg-stone-100 dark:hover:bg-stone-900"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href=""
              className="rounded-md p-2 transition-all duration-300 hover:bg-stone-100 dark:hover:bg-stone-900"
            >
              About
            </a>
          </li>
          <li>
            <a
              href=""
              className="rounded-md p-2 transition-all duration-300 hover:bg-stone-100 dark:hover:bg-stone-900"
            >
              Contact
            </a>
          </li>
        </ul>
        <div>
          <ModeToggle />
        </div>
      </header>
      <section>
        <p className="w-[700px] text-4xl">
          <span className="flex gap-2">
            Hello <h1>{user},</h1>
          </span>
          <span>
            Welcome to the boilerplate project with Vite + TS + Shadcn/UI for
            your web development.
          </span>
        </p>
      </section>
      <div className="flex items-center gap-10 rounded-md border p-4 dark:bg-stone-900">
        git clone git@github.com:Thiago-Barreto-R/boilerplate_vite_web.git
        <Button onClick={handleCopyLink}>
          <FaRegCopy />
        </Button>
      </div>
      <p>Don't forget to mark the star and follow.</p>
      <p className="text-xs italic text-stone-500">The future is bright.</p>
    </LayoutMain>
  );
}
