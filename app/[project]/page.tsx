type PageProps = {
  params: {
    project?: string;
  };
  searchParams?: unknown;
};
function page(props: PageProps) {
  return <div>page</div>;
}
export default page;
