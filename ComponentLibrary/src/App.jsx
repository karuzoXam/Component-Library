import Badge from './Components/Badges/index';
import Banner from './Components/Banners/index';

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

      <Banner.Container>
        <Banner
          status="success"
          title="Congratulations"
          text="Lorem ipsum lorem ipsum slard sddrd ksliwn"
        />
      </Banner.Container>
      <Banner.Container>
        <Banner
          status="warning"
          title="Attention"
          text="Lorem ipsum lorem ipsum slard sddrd ksliwn"
        />
      </Banner.Container>
      <Banner.Container>
        <Banner
          status="error"
          title="There is a problem with your application"
          text="Lorem ipsum lorem ipsum slard sddrd ksliwn"
        />
      </Banner.Container>
      <Banner.Container>
        <Banner
          status="neutral"
          title="Update available"
          text="Lorem ipsum lorem ipsum slard sddrd ksliwn"
        />
      </Banner.Container>

      <Banner.Container>
        <Banner status="success" title="Congratulations" />
      </Banner.Container>

      <Banner.Container>
        <Banner status="warning" title="Congratulations" />
      </Banner.Container>

      <Banner.Container>
        <Banner status="error" title="Congratulations" />
      </Banner.Container>

      <Banner.Container>
        <Banner status="neutral" title="Congratulations" />
      </Banner.Container>
    </>
  );
}

export default App;
