import Header from './header';
import Footer from './footer';

export default function Layout({
  children,
  classes,
  header,
}: {
  children: React.ReactNode;
  classes?: { header: string };
  header: React.ReactNode;
}) {
  return (
    <div className="index-pg p-0 black-bg1">
      <Header classes={classes}>{header}</Header>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
