import { Button } from "@/components/ui/button";
import LayoutMain from "../layout";
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { toast } from "sonner";

export default function Home() {
  const user = localStorage.getItem("client");
  const gitCloneLink = "https://github.com/your-repo-url.git";
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(gitCloneLink);
      toast.success("Git clone link copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <LayoutMain>
      <header className="absolute left-0 top-0 flex w-full items-center justify-around p-4">
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
            It’s great to have you here! You’ve just entered my Vite +
            TypeScript + shadcn/Ui project. Explore, enjoy, and discover all
            that this boilerplate has to offer for web development.
          </span>
        </p>
      </section>
      <Button onClick={handleCopyLink}>Copy Git Clone Link</Button>
    </LayoutMain>
  );
}
