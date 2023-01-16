function Project(props: any) {
  console.log(props.project);
  return (
    <div style={{ padding: "4px 0 5px 10px", color: "rgb(175,175,175)" }}>
      {props.project.name}
    </div>
  );
}
export default Project;
