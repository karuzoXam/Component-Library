import Badge from './Components/Badges/index';

function App() {
  return (
    <>
      <Badge.Container>
        <Badge shape="square" color="grey" text="Badge" />
        <Badge shape="square" color="red" text="Badge" />
        <Badge shape="square" color="yellow" text="Badge" />
        <Badge shape="square" color="green" text="Badge" />
        <Badge shape="square" color="blue" text="Badge" />
        <Badge shape="square" color="indigo" text="Badge" />
        <Badge shape="square" color="purple" text="Badge" />
        <Badge shape="square" color="pink" text="Badge" />
      </Badge.Container>

      <Badge.Container>
        <Badge shape="pill" color="grey" text="Badge" />
        <Badge shape="pill" color="red" text="Badge" />
        <Badge shape="pill" color="yellow" text="Badge" />
        <Badge shape="pill" color="green" text="Badge" />
        <Badge shape="pill" color="blue" text="Badge" />
        <Badge shape="pill" color="indigo" text="Badge" />
        <Badge shape="pill" color="purple" text="Badge" />
        <Badge shape="pill" color="pink" text="Badge" />
      </Badge.Container>
    </>
  );
}

export default App;
