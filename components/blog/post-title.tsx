export default function PostTitle({ children }: { children: string }) {
  return <h2 className="mb-4 mt-4 text-center post-title" dangerouslySetInnerHTML={{ __html: children }} />;
}
