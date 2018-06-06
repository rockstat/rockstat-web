import { Wrapper, Everything } from '../containers';
import { Head } from '../components';

export default () => (
  <span>
    <Head />
    <Wrapper headerBgActive={false}>
      <Everything />
    </Wrapper>
  </span>
)
