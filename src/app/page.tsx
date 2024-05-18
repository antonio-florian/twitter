import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
    {images.map((image) => (
      <div key = {image.id} className="flex w48 flex-col">
        <img src ={image.url} alt="image" ></img>
        <div>{image.name}</div>
      </div>
    ))}
  </div>
  )
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2x1 text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
