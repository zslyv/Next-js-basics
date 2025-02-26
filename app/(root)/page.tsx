import Hello from "../components/hello";

export default function Home() {
  console.log("What am I? Server or Client?")

  return (
    <>
      <h1 className="text-3xl">Welcome to Next.Js :D</h1>
      <Hello/>
    </>
  );
}
