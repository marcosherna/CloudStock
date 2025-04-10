import Icon from "@ant-design/icons";
import type { GetProps } from "antd";
import { cloudAndBoxSVG } from "./CloudAndBox";
import { cloudStockSVG } from "./CloudStock";

type CustomIconComponentProps = GetProps<typeof Icon>;
 
const CloudAndBox= (props: Partial<CustomIconComponentProps>) => (
  <Icon component={cloudAndBoxSVG} {...props} />
);

const CloudStock = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={cloudStockSVG} {...props} />
);
export { CloudAndBox, CloudStock  };
