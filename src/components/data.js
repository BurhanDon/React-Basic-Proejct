import componentsImg from "../assets/components.png";
import propsImg from "../assets/config.png";
import jsxImg from "../assets/jsx-ui.png";
import stateImg from "../assets/state-mgmt.png";

export const EXAMPLES = {
  components: {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
    code: `
        const MyComponent = () => <div>Hello, World!</div>;
      `,
  },
  jsx: {
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    code: `
    const element = <MyComponent />;
      `,
  },
  props: {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
    code: `
    const MyComponent = ({ name }) => <div>Hello, {name}!</div>;
    const element = <MyComponent name="John" />;
      `,
  },
  state: {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    code: `
    const [count, setCount] = useState(0);
      `,
  },
};
export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];
