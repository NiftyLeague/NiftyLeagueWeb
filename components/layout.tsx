import Header from './header';
import Footer from './footer';

export default function Layout({
  children,
  classes,
  header,
}: {
  children: React.ReactNode;
  classes?: { root?: string; header?: string; footer?: string };
  header?: React.ReactNode;
}) {
  return (
    <div className={`p-0 black-bg1 ${classes?.root || ''}`}>
      <Header classes={classes}>{header}</Header>
      <main>{children}</main>
      <Footer classes={classes} />
    </div>
  );
}
