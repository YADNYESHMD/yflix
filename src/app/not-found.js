import Link from "next/link";

const NotFound = () => {
  return (
    <section>
      <div>
        <center>
          <h1>404</h1>
          <h2>Not Found</h2>
          <p>Could not find requested resource</p>
          <Link href="/">
            <button>Go to Home Page</button>
          </Link>
        </center>
      </div>
    </section>
  );
};

export default NotFound;
