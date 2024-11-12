import { Container } from "./components/Container/Container";
import { Image } from "./components/Image/Image";
import { Root } from "./components/Root/Root";
import * as Row from "./components/Row/Row";
import { Title } from "./components/Title/Title";

export const Skeleton = {
  Container: Container,
  Image: Image,
  Root: Root,
  Row: Object.assign(Row.Row, {
    Row13outOf5: Row.Row13outOf5,
    Row1outOf3: Row.Row1outOf3,
  }),
  Title: Title,
};
