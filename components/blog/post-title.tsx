export default function PostTitle({ children }: { children: string }) {
  return <h2 className="mb-4 mt-md-4 text-center" dangerouslySetInnerHTML={{ __html: children }} />;
}
