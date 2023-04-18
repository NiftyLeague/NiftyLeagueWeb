import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Layout({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes?: { root?: string; footer?: string };
}) {
  return (
    <div className={`p-0 ${classes?.root || ''}`}>
      <Header />
      <main>{children}</main>
      <Footer classes={classes} />
    </div>
  );
}
