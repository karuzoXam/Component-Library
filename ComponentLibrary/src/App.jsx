import Badge from './Components/Badges/index';
import Banner from './Components/Banners/index';
import Card from './Components/Cards/Card';
import Testimonial from './Components/Testimonials/Testimonial';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCloudArrowUp } from '@fortawesome/free-regular-svg-icons';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <>
      {/* <Badge.Container>
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
      </Badge.Container> */}

      {/* <Banner.Container>
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
      </Banner.Container> */}

      {/* <Banner.Container>
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
      </Banner.Container> */}

      <Card
        icon={<FontAwesomeIcon icon={faCloudArrowUp} />}
        iconColor="#3F75FE"
        title="Easy Deployment"
        text="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
      />

      <Testimonial
        imgSrc=".\src\assets\Image.png"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. "
        name="Max Mustermann"
        job="Workcation, CEO"
      />
    </>
  );
}

export default App;
