import Flow from "./(flow)/Flow";

export default function Page() {
  return (
    // Parent component of reactflow needs a height and width in order to display
    <div style={{ height: "500px", width: "500px" }}>
      <h1>Welcome to MainPage</h1>
      <h1>flow</h1>
      <Flow />
    </div>
  );
}
