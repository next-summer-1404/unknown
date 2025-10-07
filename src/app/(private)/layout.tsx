export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
     
      {children}
    </section>
  );
}
