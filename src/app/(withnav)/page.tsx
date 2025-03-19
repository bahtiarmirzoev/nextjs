import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container flex flex-col min-h-screen gap-3 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols 4 gap-4">
        <Button className="bg-red-500">
          <Link href="/about">About</Link>
        </Button>
        <Button className="bg-blue-500">
          <Link href="/contacs">Contacts</Link>
        </Button>
      </div>
    </div>
  );
}
