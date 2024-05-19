"use client";
import Button from "../../components/Button/button";
import { useRouter } from "next/navigation";


export default function BlogDetailsLayout({
  children,
}) {

  const router = useRouter();

  const redirect = () => {
   
    router.push("/blogs");
  };

  return (
    <>
      <div className="">
        <Button onClick={redirect} name="Back" />
      </div>
      <section className="">
       

        {children}
      </section>
    </>
  );
}
