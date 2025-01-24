import Header from '@/components/Header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="mx-auto w-full max-w-4xl">{children}</div>
    </>
  );
}
