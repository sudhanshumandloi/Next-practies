export default function aboutDetails({
  params,
}: {
  params: { aboutId: string }
}) {
  return <div>My Post: {params.aboutId}</div>;
} 