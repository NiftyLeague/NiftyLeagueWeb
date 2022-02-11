export default function PostTitle({ children }: { children: string }) {
  return (
    <h1
      className="text-6xl md:text-7xl lg:text-8xl fw-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
