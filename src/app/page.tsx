import Link from "next/link";


const mockUrls = [
  "https://utfs.io/f/36bb558f-adbb-4a46-934e-b10ab314272d-2dm6km.png",
  "https://utfs.io/f/b1bdb6a4-feff-42f6-8b83-05da715b5bbc-581q36.png",
  "https://utfs.io/f/fbb4bb7a-dbb4-4cac-8060-666d9d30ec6d-h9y1e9.jpg",
  "https://utfs.io/f/66482006-83d1-4d66-9b15-9a643e8e9db9-35xsof.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">{
        mockImages.map((image) => (
          <div key = {image.id} className="w48">
            <img src ={image.url} alt="image" ></img>
          </div>
        ))
      }</div>
      Hello (gallery in progress)
    </main>
  );
}
