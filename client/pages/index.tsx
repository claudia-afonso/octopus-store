import Image from "next/image"

export default function Home() {
  return (
    <main>
      <div className="home">
        <figure>
          <Image
            src="https://static.octopuscdn.com/logos/logo.svg"
            alt="Octopus Energy Logo"
            width={470}
            height={67}
            priority={false}
          />
        </figure>
        <h1>Welcome to the Octopus Energy store!</h1>
        <p>
          Get started by visiting the <code>/product</code> URL and editing{" "}
          <code>client/pages/product.js</code>
        </p>
      </div>
    </main>
  );
}
