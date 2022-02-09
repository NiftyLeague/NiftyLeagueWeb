import Header from './header';
import Footer from './footer';

export default function Layout({
  children,
  header,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
}) {
  return (
    <div className="index-pg p-0 black-bg1">
      <Header>{header}</Header>
      {children}
      <Footer />
    </div>
  );
}
